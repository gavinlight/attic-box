import { useEffect, useState } from 'react';

export const SCROLL_UP = 'up';
export const SCROLL_DOWN = 'down';
export const SCROLL_TOP = 'top';

export const useScrollDirection = ({ initialDirection = SCROLL_DOWN, thresholdPixels = 10 } = {}) => {
  const [scrollDir, setScrollDir] = useState(initialDirection);

  useEffect(
    () => {
      const threshold = thresholdPixels || 0;
      let lastScrollY = window.pageYOffset;
      let ticking = false;

      const updateScrollDir = () => {
        const scrollY = window.pageYOffset;

        if (Math.abs(scrollY - lastScrollY) < threshold) {
          // We haven't exceeded the threshold
          ticking = false;
          return;
        }

        setScrollDir(
          scrollY < 10
            ? SCROLL_TOP
            : scrollY > lastScrollY
              ? SCROLL_DOWN
              : SCROLL_UP,
        );

        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
        }
      };

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    },
    [initialDirection, thresholdPixels],
  );

  return scrollDir;
};
