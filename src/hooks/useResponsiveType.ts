import { useEffect } from 'react';

import { MEDIA_QUERIES } from '../utils/const';
import useAppActions from './useAppActions';

export default function useResponsiveType() {
  const matchMedias = Object.values(MEDIA_QUERIES).map((item) =>
    matchMedia(item)
  );
  let activeType = '';
  const { type } = useAppActions();
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
          type(query);
        }
      }
    }
  }

  return activeType;
}
