import type { BookProps } from './types';

import './index.css';

const Book = (props: BookProps) => {
  const {
    book_image,
    title,
    author,
    publisher,
    description
  } = props;

  return (
    <div className='c__book'>
      <img
        src={book_image}
        className='c__book_img'
      />

      <div className='c__book_title'>
        <h1 className='c__book_title'>{title}</h1>
        <h3 className='c__book_author'>{author} - {publisher}</h3>
        <p className='c__book_description'>{description}</p>
      </div>
    </div>
  );
}

export default Book;
