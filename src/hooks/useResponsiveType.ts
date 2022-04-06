import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { type } from '../redux/actions/screenActions';

export default function useResponsiveType(media: { [prop: string]: string }) {
  const matchMedias = Object.values(media).map((item) => matchMedia(item));
  let activeType = '';
  const dispatch = useDispatch();
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
      for (const query in media) {
        if (media[query] === e.media) {
          dispatch(type(query));
        }
      }
    }
  }

  return activeType;
}
