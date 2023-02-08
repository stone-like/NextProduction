import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { ReactElement } from 'react';

import { NotFound } from '@/components/notfound';
import { Seo } from '@/components/seo/seo';
import { BookInfo, getBook } from '@/features/books';
import { PublicLayout } from '@/layouts/public-layout';

type BookPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

const BookPage = ({ book }: BookPageProps) => {
  if (!book) return <NotFound />;
  return (
    <>
      <Seo title={book.name} />
      <BookInfo book={book} />
    </>
  );
};

BookPage.getLayout = function getLayout(
  page: ReactElement
) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default BookPage;

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const bookId = params?.bookId as string;

  const book = await getBook({ bookId }).catch(
    () => null
  );
  return {
    props: {
      book,
    },
  };
};
