import * as i from 'types';
export * from './content/types';
export * from './devlogs/types';

export type ReduxState = {
  content: i.ContentState;
  devlogs: i.DevlogState;
};
