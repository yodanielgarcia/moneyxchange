import { RatesResponse } from "../../containers/Landing/model/Landing.model";
import differenceInMinutes from "date-fns/differenceInMinutes";
/**
 * Checks if the data is older than 10 minutes.
 * @param data: RatesResponse
 */
export function isMoreThanTenMinutes(data: RatesResponse): boolean {
  return differenceInMinutes(new Date(), new Date(data.timestamp)) >= 10;
}
