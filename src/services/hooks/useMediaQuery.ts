import * as React from 'react';
import { debounce } from 'lodash';

export const useMediaQuery = <T>(queries: T, debounceValue = 500): [keyof T, Record<keyof T, boolean>] => {
  const mediaQueries = Object.values(queries).map((query: string) => (
    window.matchMedia(query)
  ));

  const matchMediaQueries = React.useCallback(() => {
    const newObj = {} as Record<keyof T, boolean>;

    (Object.keys(queries) as (keyof T)[]).forEach((query, index) => {
      newObj[query] = mediaQueries[index].matches;
    });

    return newObj;
  }, [mediaQueries, queries]);

  const [media, setMedia] = React.useState(matchMediaQueries());

  const resizeDebounce = React.useRef(debounceValue);
  React.useEffect(() => {
    const updateMedia = () => setMedia(matchMediaQueries());
    const resizeListener = debounce(updateMedia, resizeDebounce.current);

    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [matchMediaQueries]);

  const active = (Object.keys(media) as (keyof T)[])
    .reverse()
    .find((size) => media[size]);

  return [active!, media];
};
