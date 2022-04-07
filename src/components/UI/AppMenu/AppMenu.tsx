import React from 'react';
import useAppSelector from 'hooks/useAppSelector';

import { iMenu } from 'types/iUi';

import './AppMenu.scss';

const Menu = ({ showMenu, closeMenu }: iMenu) => {
  const type = useAppSelector(({ screen }) => screen.type);

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
      {type === 'MOBILE' ? (
        <div className="menu__overlay" onClick={closeMenu}></div>
      ) : null}
    </div>
  );
};

export default Menu;
