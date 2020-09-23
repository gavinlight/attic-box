import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import axios from 'axios';

export const contentActions = {
  getContent: () => action('content/GET'),
  getContentFailed: () => action('content/GET_FAILED'),
  getContentSuccess: (res: i.ContentType) => action('content/GET_SUCCESS', res),
};

const initialState: i.ContentState = {
  data: undefined,
  loading: false,
  error: true,
};

export default (state = initialState, action: ActionType<typeof contentActions>) => {
  switch (action.type) {
    case 'content/GET':
      return {
        ...state,
        loading: true,
      };
    case 'content/GET_SUCCESS':
      return {
        ...state,
        data: {
          ...action.payload,
        },
        loading: false,
        error: false,
      };
    case 'content/GET_FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export const getContent: i.GetContent = () => (dispatch, getState) => (
  new Promise((resolve, reject) => {
    dispatch(contentActions.getContent());

    axios.get<i.ContentType>(
      'https://seek-the-game.firebaseio.com/content.json',
    )
      .then((response) => {
        dispatch(contentActions.getContentSuccess(response.data));
        resolve();
      })
      .catch(() => {
        dispatch(contentActions.getContentFailed());
        reject();
      });
  })
);
