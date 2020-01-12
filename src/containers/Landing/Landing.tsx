import React, { FC, useEffect, useState } from "react";
import ExchangeForm from "../../components/ExchangeForm/ExchangeForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {
  RATES_URL,
  RATE_REQUEST_INTERVAL,
  STORAGE_KEY
} from "../../utils/constants/rate";
import { isMoreThanTenMinutes } from "../../utils/functions/dates";
import {
  retrieveFromStorage,
  saveToStorage
} from "../../utils/functions/storage";
import "./Landing.scss";
import { CURRENCIES, RatesResponse } from "./model/Landing.model";
import { modifyToCurrencyFormat } from "../../utils/functions/numbers";

const Landing: FC<{}> = () => {
  const [rate, setRate] = useState<number>(1);
  const [dollar, setDollar] = useState<number | string>("");
  const [error, setError] = useState<{ message: string } | null>(null);

  /**
   * Fetches rates if there are no rates persisted or
   * if current rates are older than 10 minutes.
   */
  function getRates(abortController: AbortController) {
    const persistedData = retrieveFromStorage(STORAGE_KEY);

    if (!persistedData || isMoreThanTenMinutes(persistedData)) {
      fetch(RATES_URL, { signal: abortController.signal })
        .then(response => response.json())
        .then((rates: RatesResponse) => {
          setError(null);
          const newRates = {
            ...rates,
            timestamp: new Date()
          };
          setRate(newRates.rates[CURRENCIES.USD]);
          saveToStorage(STORAGE_KEY, newRates);
        })
        .catch(() =>
          setError({ message: "Service unavailable, please try again later." })
        );
    } else {
      setRate(persistedData.rates[CURRENCIES.USD]);
    }
  }

  /**
   * Makes the conversion from EU to USD and updates the value.
   * @param value?: number
   */
  const onSubmit = (value?: number) => {
    if (!value) {
      setDollar("");
      setError({ message: "Not a valid value for calculation." });
    } else {
      const decimals = value.toString().indexOf(".");
      const fixed = value
        .toString()
        .substring(decimals + 1, value.toString().length).length;
      setError(null);
      setDollar(
        value && rate
          ? modifyToCurrencyFormat(+(value * rate).toFixed(fixed))
          : ""
      );
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    getRates(abortController);
    setInterval(() => getRates(abortController), RATE_REQUEST_INTERVAL);
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="Landing bg-light">
      <Header />
      <ExchangeForm onSubmit={onSubmit} dollarValue={dollar} error={error} />
      <Footer />
    </div>
  );
};

export default Landing;
