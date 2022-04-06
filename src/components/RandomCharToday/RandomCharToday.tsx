import React from 'react';

import AppButton from '../UI/AppButton/AppButton';
import { BUTTONS_LABEL, STATUS } from 'utils/const';

import './RandomCharToday.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchRandomChar } from '../../redux/actions/charRandomActions';

const RandomCharToday = () => {
  const status = useSelector(({ charRandom }: RootState) => charRandom.status);
  const dispatch = useDispatch();
  const isDisabled = status === STATUS.LOADING;

  return (
    <div className="random-today">
      <h2 className="random-today__title">
        Random character for today!
        <br />
        Do you want to get to know him better?
      </h2>
      <h2 className="random-today__title">Or choose another one</h2>
      <div className="random-today__btn">
        <AppButton
          as="button"
          type="primary"
          onClick={() => dispatch(fetchRandomChar())}
          disabled={isDisabled}
        >
          {isDisabled ? BUTTONS_LABEL.LOADING : BUTTONS_LABEL.TRY_IT}
        </AppButton>
      </div>
    </div>
  );
};

export default RandomCharToday;
