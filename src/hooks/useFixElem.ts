import React, { useEffect, useRef } from 'react';
import { MEDIA_QUERIES } from '../utils/const';

const useFixElem = (
  refElement: React.MutableRefObject<HTMLDivElement | null>
) => {
  const offsetTop = useRef(0);
  const isFixed = useRef(false);
  const isDesktop = matchMedia(MEDIA_QUERIES.DESKTOP);
  const widthScreen = useRef(0);
  const offsetLeft = useRef(0);

  const scrollHandler = () => {
    const elem = refElement.current;
    if (elem && isDesktop.matches) {
      if (window.scrollY >= elem.offsetTop && !isFixed.current) {
        offsetLeft.current = elem.offsetLeft;
        const width = elem.offsetWidth;
        widthScreen.current = window.innerWidth;
        offsetTop.current = elem.offsetTop;
        elem.style.cssText = `
          position:fixed;
          width: ${width}px;
          top: 0;
          left: ${offsetLeft.current}px;
        `;
        isFixed.current = true;
      } else if (window.scrollY < offsetTop.current && isFixed.current) {
        clearFixed(elem);
      }
    }
  };

  const resizeHandler = () => {
    const elem = refElement.current!;
    if (isDesktop.matches && isFixed.current) {
      const newOffsetLeft =
        offsetLeft.current - (widthScreen.current - window.innerWidth) / 2;
      elem.style.left = `${newOffsetLeft}px`;
    } else if (!isDesktop.matches && isFixed.current) {
      clearFixed(elem);
    }
  };

  const clearFixed = (elem: HTMLElement) => {
    elem.style.cssText = ``;
    isFixed.current = false;
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);
    scrollHandler()
    resizeHandler()
  }, []);
};
export default useFixElem;
