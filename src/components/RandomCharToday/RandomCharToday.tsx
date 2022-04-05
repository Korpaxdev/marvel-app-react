import React from 'react';
import useMarvelServices from 'hooks/useMarvelServices';

import AppButton from '../UI/AppButton/AppButton';
import { STATUS } from 'utils/const';

import './RandomCharToday.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const RandomCharToday = () => {
  const { getRandomChar } = useMarvelServices();
  const { status } = useSelector((state: RootState) => state.randomChar);
  const isDisabled = status === STATUS.LOADING

  return (
    <div className="random-today">
      <h2 className="random-today__title">
        Random character for today!
        <br />
        Do you want to get to know him better?
      </h2>
      <h2 className="random-today__title">Or choose another one</h2>
      <div className="random-today__btn">
        <AppButton as="button" type="primary" onClick={getRandomChar} disabled={isDisabled}>
          {isDisabled ? 'Loading...' : 'Try it' }
        </AppButton>
      </div>
    </div>
  );
};

export default RandomCharToday;
