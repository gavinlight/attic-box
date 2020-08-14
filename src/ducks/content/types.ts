import * as i from 'types';

export type ContentState = {
  data?: {
    [key: string]: string;
  };
  loading: boolean;
  error: boolean;
};

export type ContentType = {
  [key: string]: string;
};

export type GetContent = i.BaseThunkAction<() => Promise<void>>;
