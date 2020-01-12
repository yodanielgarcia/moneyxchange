import { RatesResponse } from "../../containers/Landing/model/Landing.model";

/**
 * Saves requested data to session/local storage
 * @param key: string
 * @param data: any
 */
export function saveToStorage(
  key: string,
  data: RatesResponse,
  type = "session"
) {
  sessionStorage.clear();
  localStorage.clear();
  if (type === "session" && sessionStorage) {
    sessionStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem(key, JSON.stringify(data));
  } else if (localStorage) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

/**
 * Saves requested data to session/local storage
 * @param key: string
 * @param data: any
 */
export function retrieveFromStorage(
  key: string,
  type = "session"
): RatesResponse | null {
  let data;
  if (type === "session" && sessionStorage) {
    data = sessionStorage.getItem(key);
  } else if (localStorage) {
    data = localStorage.getItem(key);
  }

  return data ? JSON.parse(data) : null;
}
