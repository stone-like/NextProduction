import { rest } from 'msw';

import { API_URL } from '@/config/constants';

import { db } from '../db';

const getBookHandler = rest.get(
  `${API_URL}/books/:bookId`,
  async (req, res, ctx) => {
    const bookId = req.params.bookId as string;
    const book = db.book.findFirst({
      where: {
        id: {
          equals: bookId,
        },
      },
    });

    if (!book) {
      return res(
        ctx.delay(300),
        ctx.status(404),
        ctx.json({ message: 'Not Found!' })
      );
    }

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(book)
    );
  }
);

export const bookHandlers = [getBookHandler];
