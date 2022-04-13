import React from 'react';
import useAppActions from 'hooks/useAppActions';
import useAppSelector from 'hooks/useAppSelector';

import { motion } from 'framer-motion';
import AppButton from 'components/UI/AppButton/AppButton';
import ViewComicsList from './ViewComicsList';


import { TChar } from 'types/chars/charsTransformTypes';

const ViewCharInfo = ({ selectedChar }: { selectedChar: TChar }) => {
  const { closeSelectedCharModal } = useAppActions();
  const { type } = useAppSelector((state) => state.screen);
  let { name, thumbnail, description, links, comics } = selectedChar;
  if (comics.length > 5) {
    comics = [...comics.slice(0, 5), { name: 'And others...' }];
  }
  return (
    <motion.div
      initial={type === 'DESKTOP' ? { opacity: 0 } : false}
      animate={type === 'DESKTOP' ? { opacity: 1 } : false}
      className="char-info__body"
      key={name}
    >
      <div className="char-info__overlay" onClick={() => closeSelectedCharModal()}></div>
      <div className="char-info__content">
        <button className="char-info__close" onClick={() => closeSelectedCharModal()}>
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
          {comics.map(({ name, id }, i) => (
            <ViewComicsList id={id} name={name} key={i}/>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ViewCharInfo;
