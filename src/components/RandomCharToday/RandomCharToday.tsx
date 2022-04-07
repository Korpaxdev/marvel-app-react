import React from 'react';
import useAppSelector from 'hooks/useAppSelector';

import AppButton from '../UI/AppButton/AppButton';

import { BUTTONS_LABEL, STATUS } from 'utils/const';

import './RandomCharToday.scss';
import useAppActions from '../../hooks/useAppActions';

const RandomCharToday = () => {
  const status = useAppSelector(({ charRandom }) => charRandom.status);
  const { fetchRandomChar } = useAppActions();
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
          onClick={fetchRandomChar}
          disabled={isDisabled}
        >
          {isDisabled ? BUTTONS_LABEL.LOADING : BUTTONS_LABEL.TRY_IT}
        </AppButton>
      </div>
    </div>
  );
};

export default RandomCharToday;
