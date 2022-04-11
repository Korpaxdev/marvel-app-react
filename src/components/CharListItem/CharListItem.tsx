import React from 'react';
import useAppActions from 'hooks/useAppActions';

import { iChar } from 'types/chars/iChars';

import './CharListItem.scss';

const CharListItem = ({ chars }: { chars: iChar }) => {
  const { name, thumbnail } = chars;
  const { setSelectedChar } = useAppActions();

  const onKeyPressSelectedChar = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.code === 'Enter') {
      setSelectedChar(chars);
    }
  };
  const onMouseSelectedChar = () => {
    setSelectedChar(chars);
  }

  return (
    <li
      className="char-list-item"
      tabIndex={0}
      onClick={onMouseSelectedChar}
      onKeyPress={onKeyPressSelectedChar}
    >
      <div className="char-list-item__img">
        <img src={thumbnail} alt={name} />
      </div>
      <h2 className="char-list-item__title">{name}</h2>
    </li>
  );
};

export default CharListItem;
