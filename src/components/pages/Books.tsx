import { useEffect, useState } from 'react';

import { getBooksList } from '../../services/books';

import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';

import type { BooksListResponseSchema, BooksListResult } from '../../services/books/types';

import './index.css';
import Book from '../molecules/Book';
import type { BookProps } from '../molecules/Book/types';

const Books = () => {
  const [data, setDate] = useState<BooksListResult | undefined>(undefined);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);

    getBooksList()
      .then((response: BooksListResponseSchema | null) => {
        setDate(response?.results);
      })
      .finally(
        () => setLoading(false)
      );
  }

  if (loading) {
    return <div>loading...</div>
  }

  if (!data) {
    return <div>No content to display</div>
  }

  return (
    <div className='c__books_layout'>
      <div className='c__books_header'>
        <Title text={data.display_name} />
        <Subtitle text={data.display_name} />
      </div>

      <div className='c__books'>
        {data.books.map((book: BookProps) => <Book {...book} />)}
      </div>
    </div>
  );
}

export default Books;
