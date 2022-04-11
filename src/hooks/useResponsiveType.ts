import { useEffect } from 'react';
import useAppActions from './useAppActions';

import { MEDIA_QUERIES, SCREEN_TYPE } from '../utils/const';

export default function useResponsiveType() {
  const matchMedias = Object.values(MEDIA_QUERIES).map((item) =>
    matchMedia(item)
  );
  let activeType = '';
  const { screenChangeType } = useAppActions();
  useEffect(() => {
    matchMedias.forEach((item) => {
      item.addEventListener('change', changeType);
      changeType(item);
    });
    return () => {
      matchMedias.forEach((item) => {
        item.removeEventListener('change', changeType);
      });
    };
  }, []);

  function changeType(e: MediaQueryListEvent | MediaQueryList) {
    if (e.matches) {
      for (const query in MEDIA_QUERIES) {
        if (MEDIA_QUERIES[query as keyof typeof MEDIA_QUERIES] === e.media) {
          screenChangeType(SCREEN_TYPE[query as keyof typeof SCREEN_TYPE]);
        }
      }
    }
  }

  return activeType;
}
