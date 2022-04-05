import React from 'react';

import './CharListItem.scss';
import { iChar } from '../../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { selectedChar } from '../../store/actions';

const CharListItem = ({ chars }: { chars: iChar }) => {
  const { name, thumbnail, id } = chars;
  const dispatch = useDispatch();

  return (
    <li
      className="char-list-item"
      tabIndex={0}
      onClick={() => dispatch(selectedChar(id))}
    >
      <div className="char-list-item__img">
        <img src={thumbnail} alt={name} />
      </div>
      <h2 className="char-list-item__title">{name}</h2>
    </li>
  );
};

export default CharListItem;
