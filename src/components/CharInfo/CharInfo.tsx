import React, { useEffect, useRef } from 'react';
import useAppSelector from 'hooks/useAppSelector';
import useAppActions from 'hooks/useAppActions';
import useFixElem from 'hooks/useFixElem';

import AppButton from '../UI/AppButton/AppButton';
import AppSkeleton from '../UI/AppSkeleton/AppSkeleton';

import { TChar } from 'types/chars/charsTransformTypes';

import { SCREEN_TYPE } from 'utils/const';

import './CharInfo.scss';
import { motion } from 'framer-motion';

const CharInfo = () => {
  const { selectedChar, isOpen } = useAppSelector((state) => state.charInfo);
  const type = useAppSelector(({ screen }) => screen.type);
  const charInfo = useRef<HTMLDivElement | null>(null);
  useFixElem(charInfo);

  useEffect(() => {
    if (type !== SCREEN_TYPE.DESKTOP) {
      isOpen
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = '');
    } else {
      if (isOpen) document.body.style.overflow = '';
    }
  }, [isOpen, type]);

  return (
      <div
        className={isOpen ? `char-info char-info_active` : `char-info`}
        ref={charInfo}
      >
        {selectedChar ? (
          <ViewCharInfo selectedChar={selectedChar}/>
        ) : (
          <AppSkeleton />
        )}
      </div>
  );
};

const ViewCharInfo = ({ selectedChar }: { selectedChar: TChar }) => {
  const { closeModal } = useAppActions();
  const {type} = useAppSelector(state => state.screen)
  let { name, thumbnail, description, links, comics } = selectedChar;
  if (comics.length > 5) {
    comics = comics.slice(0, 5);
  }
  return (
    <motion.div
      initial={type==='DESKTOP' ? {opacity: 0} : false}
      animate={type==='DESKTOP' ? {opacity: 1} : false}
      className="char-info__wrapper"
      key={name}
    >
      <div className="char-info__overlay" onClick={() => closeModal()}></div>
      <div className="char-info__content">
        <button className="char-info__close" onClick={() => closeModal()}>
          X
        </button>
        <div className="char-info__head">
          <div className="char-info__img">
            <img src={thumbnail} alt={name} />
          </div>
          <div className="char-info__head-right">
            <h2 className="char-info__title">{name}</h2>
            <div className="char-info__btns">
              {links.map(({ type, url, label }) => (
                <AppButton as="a" type={type} href={url} key={type}>
                  {label}
                </AppButton>
              ))}
            </div>
          </div>
        </div>
        <p className="char-info__description">{description}</p>
        <h3 className="char-info__subtitle">Comics:</h3>
        <ul className="char-info__comics-list">
          {comics.map((name, i) => (
            <li className="char-info__comics-list-item" key={i}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
export default CharInfo;
