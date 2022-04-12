import React, { useEffect } from 'react';

import useAppActions from '../../hooks/useAppActions';
import useAppSelector from 'hooks/useAppSelector';
import AppButton from '../UI/AppButton/AppButton';
import AppLoading from '../UI/AppLoading/AppLoading';
import AppErrorMessage from '../UI/AppErrorMessage/AppErrorMessage';
import {motion} from 'framer-motion';

import { TChar } from 'types/chars/charsTransformTypes';

import { MOTION, STATUS } from 'utils/const';

import './RandomChar.scss';

const RandomChar = () => {
  const char = useAppSelector(({ charRandom }) => charRandom.char);
  const status = useAppSelector(({ charRandom }) => charRandom.status);
  const {fetchRandomChar} = useAppActions();

  useEffect(() => {
    fetchRandomChar()
  }, []);
  return (
    <article className="random-char">
      {status === STATUS.LOADING ? <AppLoading /> : null}
      {status === STATUS.ERROR ? <AppErrorMessage /> : null}
      {char && status === STATUS.DONE ? <ViewChar char={char} /> : null}
    </article>
  );
};

function ViewChar({ char }: { char: TChar }) {
  let { name, description, thumbnail, links } = char;
  if (description.length > 200) {
    description = description.slice(0, 200) + '...';
  }
  return (
    <motion.div
      initial={MOTION.INIT}
      animate={MOTION.ANIMATE}
      className="random-char__wrapper">
      <div className="random-char__img">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="random-char__description">
        <h2 className="random-char__title">{name}</h2>
        <p className="random-char__text">{description}</p>
        <div className="random-char__buttons">
          {links.map(({ type, url, label }) => (
            <AppButton as="a" type={type} href={url} key={type}>
              {label}
            </AppButton>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default RandomChar;
