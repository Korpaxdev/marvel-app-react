import React from 'react';

import { iBurgerMenu } from 'types/iUi';

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
