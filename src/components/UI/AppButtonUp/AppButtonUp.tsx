import React, { useEffect, useState } from 'react';

import up from 'assets/up.svg';
import './AppButtonUp.scss';

const AppButtonUp = () => {
  const [show, setShow] = useState(false);
  const className = show ? `button-up button-up_active` : `button-up`;
  const goToUp = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const changeVisibility = () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const setPaddingRight = () => {
    const button = document.querySelector<HTMLButtonElement>('.button-up')
    if (window.innerWidth > 1254 && button) {
      const paddingRight = (window.innerWidth - 1254) / 2
      button.style.right = paddingRight + 'px'
    }
    else if (window.innerWidth <= 1254 && button) {
      button.style.right = ''
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeVisibility);
    window.addEventListener('resize', setPaddingRight)
    setPaddingRight()
    return () => {
      window.removeEventListener('scroll', changeVisibility)
    }
  }, []);

  return (
    <button className={className} onClick={goToUp}>
      <img src={up} alt="Go up" />
    </button>
  );
};

export default AppButtonUp;
