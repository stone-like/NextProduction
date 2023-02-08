import { Book } from '../../types';

type BookInfoProps = {
  book: Book;
};
export const BookInfo = (props: BookInfoProps) => {
  const { book } = props;
  return (
    <>
      <div>BookName: {book.name}</div>
      <div>Content: {book.content}</div>
    </>
  );
};
