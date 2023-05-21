import * as React from 'react';

import { useMediaQuery } from 'hooks';
import { sizes } from 'styles/utils';

export const useMobile = (debounce = 500): [boolean, boolean] => {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);
  const [mediaActive] = useMediaQuery({ mobile: `(max-width: ${sizes.tablet - 1}px)` }, debounce);

  React.useEffect(() => {
    setIsMobile(mediaActive === 'mobile');
  }, [mediaActive]);

  return [Boolean(isMobile), typeof isMobile !== 'undefined'];
};
