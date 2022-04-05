import React from 'react';
import type { iBurgerMenu } from 'interfaces/interfaces';

import './AppBurgerMenu.scss';

const AppBurgerMenu = ({ showMenu, closeMenu, openMenu }: iBurgerMenu) => {
  const changeShowMenu = () => {
    if (!showMenu) {
      openMenu()
    } else {
      closeMenu()
    }
  };
  return (
    <div
      className={showMenu ? 'burger-menu active' : 'burger-menu'}
      onClick={changeShowMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default AppBurgerMenu;
