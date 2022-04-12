import React from 'react';
import useAppSelector from 'hooks/useAppSelector';
import { NavLink } from 'react-router-dom';

import { TMenu } from 'types/uiTypes';

import './AppMenu.scss';

const Menu = ({ showMenu, closeMenu }: TMenu) => {
  const type = useAppSelector(({ screen }) => screen.type);

  return (
    <div className={showMenu ? 'menu-wrapper active' : 'menu-wrapper'}>
      <ul className="menu">
        <li className="menu__item" onClick={closeMenu}>
          <NavLink to="/" className="menu__link">
            Characters
          </NavLink>
        </li>
        <li className="menu__item" onClick={closeMenu}>
          <NavLink to="/comics" className="menu__link">
            Comics
          </NavLink>
        </li>
      </ul>
      {type === 'MOBILE' ? (
        <div className="menu__overlay" onClick={closeMenu}></div>
      ) : null}
    </div>
  );
};

export default Menu;
