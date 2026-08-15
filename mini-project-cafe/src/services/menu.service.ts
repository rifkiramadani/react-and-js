import environment from "../constants/environment";
import fetchAPI from "../utils/fetch";
import { getLocalStorage } from "../utils/storage";

export const getMenus = async (category?: string) => {
  let url = `${environment.API_URL}/menu?page=1&pageSize=25`;

  if (category) {
    url += `&category=${category}`;
  }

  const result = await fetchAPI(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getLocalStorage("auth")}`, //digunakan untuk autentikasi token ketika sudah login
    },
  }).then((data) => data);

  return result;
};
