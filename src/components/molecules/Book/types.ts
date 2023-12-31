interface BuyLinks {
  name: string;
  uri: string;
}

interface ISBNS {
  isbn10: string;
  isbn13: string;
}

interface BookProps {
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  description: string;
  price: string;
  title: string;
  author: string;
  contributor: string;
  contributor_note: string;
  book_image: string;
  book_image_width: number;
  book_image_height: number;
  amazon_product_url: string;
  age_group: string;
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
  buy_links: Array<BuyLinks>
  isbns: Array<ISBNS>
}

export type {
  BookProps,
  BuyLinks,
  ISBNS
}
