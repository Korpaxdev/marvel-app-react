import React, { useEffect, useRef } from 'react';
import { MEDIA_QUERIES } from '../utils/const';

const useFixElem = (
  refElement: React.MutableRefObject<HTMLDivElement | null>
) => {
  const initOffsetTop = useRef(0);
  const initWidthScreen = useRef(0);
  const initOffsetLeft = useRef(0);
  const isFixed = useRef(false);
  const isDesktop = matchMedia(MEDIA_QUERIES.DESKTOP);
  const isAbsolute = useRef(false)

  const scrollHandler = () => {
    const elem = refElement.current;

    if (elem && isDesktop.matches) {
      const parentHeight = elem.parentElement!.offsetHeight
      const parenOffset = elem.parentElement!.offsetTop
      const elemWidth = elem.offsetWidth
      const elemLeft = elem.offsetLeft


      const createFixElement = (!isFixed.current && !isAbsolute.current) && window.scrollY >= elem.offsetTop
      const createAbsoluteElement = isFixed.current && window.scrollY - parenOffset + elem.offsetHeight >= parentHeight
      const createFixedAfterAbsolute = isAbsolute.current && window.scrollY - parenOffset + elem.offsetHeight < parentHeight && window.scrollY > initOffsetTop.current
      const clearElement = window.scrollY < initOffsetTop.current && isFixed.current
      const firstInit = !initOffsetLeft.current && !initOffsetTop.current && !initWidthScreen.current

      if (firstInit) {
        initOffsetLeft.current = elem.offsetLeft;
        initOffsetTop.current = elem.offsetTop;
        initWidthScreen.current = window.innerWidth;
      }

      if (createFixElement || createFixedAfterAbsolute) {
        fixElement(elem, elemWidth, elemLeft)
      } else if (createAbsoluteElement) {
        absoluteElement(elem, elemWidth, elemLeft)
      } else if (clearElement) {
          clearFixed(elem);
        }
    }
  };

  const resizeHandler = () => {
    const elem = refElement.current!;
    if (isDesktop.matches && (isFixed.current || isAbsolute.current)) {
      const newOffset = initOffsetLeft.current- (initWidthScreen.current - window.innerWidth) / 2
      elem.style.left = `${newOffset}px`;
    } else if (!isDesktop.matches && isFixed.current) {
      clearFixed(elem);
    }
  };

  const clearFixed = (elem: HTMLElement) => {
    elem.style.cssText = ``;
    isFixed.current = false;
  };
  const fixElement = (elem:HTMLElement, elemWidth: number, elemLeft: number) => {
    elem.style.cssText = `
          position:fixed;
          width: ${elemWidth}px;
          top: 0;
          left: ${elemLeft}px;
        `;
    isFixed.current = true;
  }

  const absoluteElement = (elem: HTMLElement, elemWidth: number, elemLeft: number) => {
    elem.style.cssText = `
         position: absolute;
         width: ${elemWidth}px;
         left: ${elemLeft}px;
         top: ${window.scrollY}px;
        `
    isFixed.current = false;
    isAbsolute.current = true;
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);
    scrollHandler();
    resizeHandler();
    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
};
export default useFixElem;
