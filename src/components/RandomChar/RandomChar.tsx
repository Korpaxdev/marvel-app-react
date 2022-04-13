import React, { useEffect } from 'react';

import useAppActions from '../../hooks/useAppActions';
import useAppSelector from 'hooks/useAppSelector';
import AppLoading from '../UI/AppLoading/AppLoading';
import AppErrorMessage from '../UI/AppErrorMessage/AppErrorMessage';
import ViewRandomChar from './Views/ViewRandomChar';

import { STATUS } from 'utils/const';

import './RandomChar.scss';

const RandomChar = () => {
  const char = useAppSelector(({ charRandom }) => charRandom.char);
  const status = useAppSelector(({ charRandom }) => charRandom.status);
  const { fetchRandomChar } = useAppActions();

  useEffect(() => {
    fetchRandomChar();
  }, []);
  return (
    <article className="random-char">
      {status === STATUS.LOADING ? <AppLoading /> : null}
      {status === STATUS.ERROR ? <AppErrorMessage /> : null}
      {char && status === STATUS.DONE ? <ViewRandomChar char={char} /> : null}
    </article>
  );
};

export default RandomChar;
