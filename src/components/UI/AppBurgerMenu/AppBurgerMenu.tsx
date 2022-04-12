import React from 'react';

import { TBurgerMenu } from 'types/uiTypes';

import './AppBurgerMenu.scss';

const AppBurgerMenu = ({ showMenu, closeMenu, openMenu }: TBurgerMenu) => {
  const changeShowMenu = () => {
    if (!showMenu) {
      openMenu();
    } else {
      closeMenu();
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
