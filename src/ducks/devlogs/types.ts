import * as i from 'types';

export type Devlog = {
  link?: string;
};

export type DevlogsState = {
  data?: {
    [key: string]: i.Devlog;
  };
  loading: boolean;
  error: boolean;
};

export type GetDevlogs = i.BaseThunkAction<() => Promise<void>>;
