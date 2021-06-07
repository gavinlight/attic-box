import * as i from 'types';

export type Devlog = {
  link?: string;
  hero?: string;
  introduction?: string;
  number?: number;
  thumbnail?: string;
  time?: string;
};

export type DevlogsState = {
  data?: {
    [key: string]: i.Devlog;
  };
  loading: boolean;
  error: boolean;
};

export type GetDevlogs = i.BaseThunkAction<() => Promise<void>>;
