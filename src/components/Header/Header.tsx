import React, { useState } from 'react';
import useAppSelector from 'hooks/useAppSelector';

import Menu from '../UI/AppMenu/AppMenu';
import AppBurgerMenu from '../UI/AppBurgerMenu/AppBurgerMenu';

import './Header.scss';

const Header = () => {
  const type = useAppSelector(({ screen }) => screen.type);
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    document.body.style.overflow = '';
    setShowMenu(false);
  };
  const openMenu = () => {
    document.body.style.overflow = 'hidden';
    setShowMenu(true);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <a href="#" className="header__logo">
            <span>Marvel</span> information portal
          </a>
          <Menu showMenu={showMenu} closeMenu={closeMenu} />
          {type === 'MOBILE' ? (
            <AppBurgerMenu
              closeMenu={closeMenu}
              showMenu={showMenu}
              openMenu={openMenu}
            />
          ) : null}
        </nav>
      </div>
    </header>
  );
};

export default Header;
