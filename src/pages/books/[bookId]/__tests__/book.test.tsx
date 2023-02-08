import { testData } from '@/testing/test-data';
import { appRender, screen } from '@/testing/test-utils';

import BookPage, { getServerSideProps } from '..';

const book = testData.books[0];

describe('Book Page', () => {
  //getServerSidePropsとPageは分けてテストする
  it('should use getServerSideProps', async () => {
    //getServerSidePropsの引数を満たすために局所的にanyを使う
    const { props } = await getServerSideProps({
      params: {
        bookId: book.id,
      },
    } as any);

    expect(props.book).toEqual(book);
  });

  it('should render BookInfo', async () => {
    appRender(<BookPage book={book} />);

    const name = screen.getByText(/user1/i);
    const content = screen.getByText(/content1/i);

    expect(name).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it('should not found when book missing', async () => {
    appRender(<BookPage book={null} />);

    const notFoundMessage = screen.getByRole('heading', {
      name: /not found/i,
    });

    expect(notFoundMessage).toBeInTheDocument();
  });
});
