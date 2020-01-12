/**
 * Validates user input and returns the new value.
 * @param value: string
 * @returns string
 */
export function validateUserInput(value: string): string {
  if (
    isAlreadyDecimal(value) ||
    hasNonNumericValue(value) ||
    hasMoreThanFourDecimals(value)
  ) {
    return value;
  }

  return value;
}

/**
 * Checks if user is typing more than one dot in order to avoid
 * incorrect decimal parse.
 * @param value: string
 * @returns boolean
 */
function isAlreadyDecimal(value: string): boolean {
  const decimals = value.indexOf(".");

  if (value.includes(".")) {
    const checkSecondDecimal = value.substring(decimals + 1, value.length);

    return checkSecondDecimal.includes(".");
  }

  return false;
}

/**
 * Checks if user is typing a non numeric value.
 * @param value: string
 * @returns boolean
 */
function hasNonNumericValue(value: string): boolean {
  return (
    isNaN(Number(value.substring(value.length - 1))) &&
    !value.substring(value.length - 1).includes(".")
  );
}

/**
 * Checks if user exceeding maximum limit for decimals.
 * @param value: string
 * @returns boolean
 */
function hasMoreThanFourDecimals(value: string): boolean {
  const decimals = value.indexOf(".");
  return value.substring(decimals + 1, value.length).length > 4;
}
