import React, { FC, useState } from "react";
import "./ExchangeForm.scss";
import { validateUserInput } from "../../utils/functions/validations";
import NumberFormat from 'react-number-format';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';

type Props = {
  onSubmit: (value?: number) => void;
  dollarValue: number | string;
  error: { message: string } | null;
};

const ExchangeForm: FC<Props> = ({ onSubmit, dollarValue, error }) => {
  const [value, setValue] = useState<number | string>("");
  /**
   * Updates state value.
   * @param event: React.ChangeEvent<HTMLInputElement>
   */
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(validateUserInput(event.target.value));

  /**
   * Executes submit function provided by the container.
   * @param event: React.FormEvent<HTMLFormElement>
   */
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(+value);
  };

  return (
    <main className="ExchangeForm">
      <form className="v-flex-center" onSubmit={handleOnSubmit}>
          <DropdownButton
            variant="outline-secondary"
            title="Monedas"
            id="input-group-dropdown-1"
          >
            <Dropdown.Item href="#">EU-UDS</Dropdown.Item>
          </DropdownButton>
        <div className="ExchangeForm__inputs">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">EU</span>
              <NumberFormat value={value} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>
            <input
              type="text"
              className="form-control"
              aria-describedby="Euros"
              placeholder="EU"
              name="euro"
              value={value}
              onChange={handleOnChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">USD</span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-describedby="Dollars"
              placeholder="USD"
              name="dollar"
              disabled
              value={dollarValue}
            />
          </div>
        </div>
        <Button type="submit" variant="light">CALCULATE</Button>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error.message}
          </div>
        )}
      </form>
    </main>
  );
};

export default ExchangeForm;
