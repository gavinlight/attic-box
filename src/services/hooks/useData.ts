import * as i from 'types';
import React, { Reducer } from 'react';

export const useData = <Data, ReturnData = Data>(
  fetchFunction: () => Promise<Data>,
  options: UseDataOptions<Data, ReturnData> = {
    fetchOnLoad: true,
    onFetchData: undefined,
    transformFunction: undefined,
    dependencies: [],
  },
): UserState<ReturnData> => {
  const isMountedRef = React.useRef(false);
  const { fetchOnLoad, onFetchData, transformFunction, dependencies = [] } = options;

  const [state, dispatch] = React.useReducer<Reducer<ReducerState<Data>, ReducerActions<Data>>>(
    (state, action) => {
      switch (action.type) {
        case 'GET':
          return {
            ...state,
            error: undefined,
            loading: true,
          };
        case 'SUCCESS':
          return {
            ...state,
            data: action.payload,
            loading: false,
          };
        case 'FAILED':
          return {
            ...state,
            error: action.payload,
            loading: false,
          };
        default:
          throw new Error();
      }
    }, {
      data: undefined,
      loading: fetchOnLoad !== undefined
        ? fetchOnLoad
        : false,
      error: undefined,
    });

  const fetchData = () => {
    onFetchData?.();
    dispatch({ type: 'GET' });

    fetchFunction()
      .then((data) => {
        dispatch({ type: 'SUCCESS', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'FAILED', payload: error });
      });
  };

  // useEffect with dependencies for refetching data
  React.useEffect(() => {
    if (!isMountedRef.current) return;
    fetchData();
  }, [...dependencies]);

  React.useEffect(() => {
    if (fetchOnLoad) fetchData();
    isMountedRef.current = true;
  }, []);

  return React.useMemo(
    () => ({
      data: transformFunction
        ? transformFunction(state.data)
        : state.data,
      isLoading: state.loading,
      isErrored: Boolean(state.error),
      error: state.error,
    } as UserState<ReturnData>
    ), [state],
  );
};

type ReducerState<Data> = {
  data?: Data;
  loading: boolean;
  error?: string;
};

type ReducerActions<Data> = {
  type: 'GET';
} | {
  type: 'SUCCESS';
  payload: Data;
} | {
  type: 'FAILED';
  payload: string;
};

type UserState<Data> = {
  data: Data;
  isLoading: boolean;
  isErrored: boolean;
  error?: string;
};

type UseDataOptions<Data, ReturnData = Data> = {
  fetchOnLoad?: boolean;
  transformFunction?: (data?: Data) => ReturnData;
  onFetchData?: () => void;
  dependencies?: any[];
};
