import { DehydratedState } from '@tanstack/react-query';
import { Properties } from 'csstype';

declare global {
  type Nullable<T> = T | null;

  type Dict<T> = Record<string, T>;

  type ShallowMerge<T1, T2> = Omit<T1, keyof T2> & T2;

  type EmotionProperties = ShallowMerge<
    Properties<number | string>,
    {
      // override properties with emotion's number type
      fontWeight?: number;
      columnGap?: number;
      rowGap?: number;
    }
  >;

  interface Window {
    _rqd_: DehydratedState[] | { push: (entry: DehydratedState) => void };
    __isHydrated?: boolean;
    __RELEASE_DATE?: string;
  }
}

export {};
