import React from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from 'redux/store';
import { iMenu } from 'interfaces/interfaces';

import './AppMenu.scss';

const Menu = ({ showMenu, closeMenu }: iMenu) => {
  const type = useSelector<RootState>(({ screen }) => screen.type);

  return (
    <div className={showMenu ? 'menu-wrapper active' : 'menu-wrapper'}>
      <ul className="menu">
        <li className="menu__item">
          <a href="#" className="menu__link active">
            Characters
          </a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">
            Comics
          </a>
        </li>
      </ul>
      {type === 'MOBILE' ? <div className="menu__overlay" onClick={closeMenu}></div> : null}
    </div>
  );
};

export default Menu;
