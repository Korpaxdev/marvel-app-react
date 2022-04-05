import React from 'react';
import type { iButton } from 'interfaces/interfaces';

import './AppButton.scss';

const AppButton = ({
  as,
  children = 'No title',
  type,
  href,
  onClick,
  disabled,
}: iButton) => {

  const className = `button button-${type}`;
  switch (as) {
    case 'a':
      return (
        <a href={href} target="_blank" rel="noreferrer" className={className}>
          {children}
        </a>
      );
    case 'button':
      return (
        <button className={className} onClick={onClick} disabled={disabled}>
          {children}
        </button>
      );
  }
};

export default AppButton;
