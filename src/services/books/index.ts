import { EXTERNAL_URL, REACT_APP_API_KEY } from "../../config";
import type { BooksListResponseSchema } from "./types";

const getBooksList = async (): Promise<BooksListResponseSchema | null> => {
  try {
    const URL = `${ EXTERNAL_URL }/lists/current/hardcover-fiction.json?api-key=${ REACT_APP_API_KEY }`;
    const response = await fetch(URL);
    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export {
  getBooksList
}
