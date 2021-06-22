import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import axios from 'axios';

export const devlogsActions = {
  getDevlogs: () => action('devlogs/GET'),
  getDevlogsFailed: () => action('devlogs/GET_FAILED'),
  getDevlogsSuccess: (res: i.Devlog[]) => action('devlogs/GET_SUCCESS', res),
};

const initialState: i.DevlogsState = {
  data: undefined,
  loading: false,
  error: true,
};

export default (state = initialState, action: ActionType<typeof devlogsActions>) => {
  switch (action.type) {
    case 'devlogs/GET':
      return {
        ...state,
        loading: true,
      };
    case 'devlogs/GET_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case 'devlogs/GET_FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export const getDevlogs: i.GetDevlogs = () => (dispatch, getState) => (
  new Promise((resolve, reject) => {
    dispatch(devlogsActions.getDevlogs());

    axios.get<i.Devlog[]>(
      'https://seek-the-game.firebaseio.com/devlogs.json',
    )
      .then((response) => {
        dispatch(devlogsActions.getDevlogsSuccess(response.data));
        resolve();
      })
      .catch(() => {
        dispatch(devlogsActions.getDevlogsFailed());
        reject();
      });
  })
);
