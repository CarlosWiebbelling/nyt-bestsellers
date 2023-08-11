import { BookProps } from "../../components/molecules/Book/types";

interface BooksListResult {
  bestsellers_date: string;
  published_date: string;
  books: Array<BookProps>;
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  next_published_date: string;
  normal_list_ends_at: number;
  previous_published_date: string;
  published_date_description: string;
  updated: string;
}

interface BooksListResponseSchema {
  status: string;
  copyright: string;
  num_results: number;
  results: BooksListResult;
}

export type {
  BooksListResult,
  BooksListResponseSchema
}
