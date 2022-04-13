import React from 'react';
import useAppActions from 'hooks/useAppActions';
import useAppSelector from 'hooks/useAppSelector';

import { motion } from 'framer-motion';

import { TChar } from 'types/chars/charsTransformTypes';

import { MOTION, SCREEN_TYPE } from 'utils/const';

import './CharListItem.scss';

const CharListItem = ({ chars }: { chars: TChar }) => {
  const { name, thumbnail } = chars;
  const { type } = useAppSelector((state) => state.screen);
  const { setSelectedChar, openSelectedCharModal } = useAppActions();

  const onKeyPressSelectedChar = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.code === 'Enter') {
      if (type !== SCREEN_TYPE.DESKTOP) openSelectedCharModal();
      setSelectedChar(chars);
    }
  };
  const onMouseSelectedChar = () => {
    if (type !== SCREEN_TYPE.DESKTOP) openSelectedCharModal();
    setSelectedChar(chars);
  };

  return (
    <motion.li
      initial={MOTION.INIT}
      animate={MOTION.ANIMATE}
      transition={MOTION.LIST_TRANSITION}
      className="char-list-item"
      tabIndex={0}
      onClick={onMouseSelectedChar}
      onKeyPress={onKeyPressSelectedChar}
    >
      <div className="char-list-item__img">
        <img src={thumbnail} alt={name} />
      </div>
      <h2 className="char-list-item__title">{name}</h2>
    </motion.li>
  );
};

export default CharListItem;
