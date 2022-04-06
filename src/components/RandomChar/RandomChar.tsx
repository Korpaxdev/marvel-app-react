import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';

import AppButton from '../UI/AppButton/AppButton';
import AppLoading from '../UI/AppLoading/AppLoading';

import { iChar } from 'interfaces/interfaces';
import { STATUS } from 'utils/const';

import './RandomChar.scss';
import AppErrorMessage from '../UI/AppErrorMessage/AppErrorMessage';
import { fetchRandomChar } from '../../redux/actions/charRandomActions';

const RandomChar = () => {
  const char = useSelector(({ charRandom }: RootState) => charRandom.char);
  const status = useSelector(({ charRandom }: RootState) => charRandom.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomChar());
  }, []);
  return (
    <article className="random-char">
      {status === STATUS.LOADING ? <AppLoading /> : null}
      {status === STATUS.ERROR ? <AppErrorMessage /> : null}
      {char && status === STATUS.DONE ? <ViewChar char={char} /> : null}
    </article>
  );
};

function ViewChar({ char }: { char: iChar }) {
  let { name, description, thumbnail, links } = char;
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
          {links.map(({ type, url, label }) => (
            <AppButton as="a" type={type} href={url} key={type}>
              {label}
            </AppButton>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RandomChar;
