export enum CURRENCIES {
  USD = "USD",
  EUR = "EUR"
}

export interface ExchangeRate {
  currency: CURRENCIES;
  rate: number;
  lastUpdate: Date;
}

export interface RatesResponse {
  success: boolean;
  timestamp: number | Date;
  base: CURRENCIES;
  date: string;
  rates: { [key: string]: number };
}
