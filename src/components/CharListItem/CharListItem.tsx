import React from 'react';

import { iChar } from 'types/chars/iChars';

import './CharListItem.scss';
import useAppActions from '../../hooks/useAppActions';

const CharListItem = ({ chars }: { chars: iChar }) => {
  const { name, thumbnail } = chars;
  const { selectedChar } = useAppActions();

  return (
    <li
      className="char-list-item"
      tabIndex={0}
      onClick={() => selectedChar(chars)}
    >
      <div className="char-list-item__img">
        <img src={thumbnail} alt={name} />
      </div>
      <h2 className="char-list-item__title">{name}</h2>
    </li>
  );
};

export default CharListItem;
