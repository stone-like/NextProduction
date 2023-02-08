import { Entity } from '@/types';

export type Book = Entity & {
  name: string;
  content: string;
};
