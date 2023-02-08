import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { queryKeys } from '@/lib/react-query';

import { Book } from '../types';

type GetBookOptions = {
  bookId: string;
};

export const getBook = ({
  bookId,
}: GetBookOptions): Promise<Book> => {
  return apiClient.get(`/books/${bookId}`);
};

export const useBook = ({ bookId }: GetBookOptions) => {
  const { data, isLoading } = useQuery({
    // queryKey: ['books', bookId],
    queryKey: queryKeys.books.one(bookId),

    queryFn: () => getBook({ bookId }),
  });

  return { data, isLoading };
};
