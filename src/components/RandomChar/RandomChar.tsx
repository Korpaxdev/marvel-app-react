import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import useMarvelServices from 'hooks/useMarvelServices';

import AppButton from '../UI/AppButton/AppButton';
import AppLoading from '../UI/AppLoading/AppLoading';

import { iChar } from 'interfaces/interfaces';
import { STATUS } from 'utils/const';

import './RandomChar.scss';
import AppErrorMessage from '../UI/AppErrorMessage/AppErrorMessage';

const RandomChar = () => {
  const { getRandomChar } = useMarvelServices();
  const char = useSelector(({ randomChar }: RootState) => randomChar.char);
  const status = useSelector(({ randomChar }: RootState) => randomChar.status);
  useEffect(() => {
    getRandomChar();
  }, []);
  return (
    <article className="random-char">
      {status === STATUS.LOADING ? <AppLoading /> : null}
      {status === STATUS.ERROR ? <AppErrorMessage/> : null}
      {char && status === STATUS.DONE ? <ViewChar char={char} /> : null}
    </article>
  );
};

function ViewChar({ char }: { char: iChar }) {
  let { name, description, thumbnail } = char;
  if (description.length > 200) {
    description = description.slice(0, 200) + '...';
  }
  return (
    <div className="random-char__wrapper">
      <div className="random-char__img">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="random-char__description">
        <h2 className="random-char__title">{name}</h2>
        <p className="random-char__text">{description}</p>
        <div className="random-char__buttons">
          <AppButton as="a" type="primary" href="#">
            Homepage
          </AppButton>
          <AppButton as="a" type="secondary" href="#">
            Wiki
          </AppButton>
        </div>
      </div>
    </div>
  );
}

export default RandomChar;
