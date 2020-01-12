/**
 * Formats a number to a currency format.
 * @param num: number
 * @returns number
 */
export function modifyToCurrencyFormat(num: number): string {
  const parts = num
    .toFixed(4)
    .toString()
    .split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
