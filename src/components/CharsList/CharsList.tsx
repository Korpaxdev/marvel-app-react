import React, { useEffect, useMemo } from 'react';
import useAppSelector from 'hooks/useAppSelector';

import CharListItem from '../CharListItem/CharListItem';
import AppLoading from '../UI/AppLoading/AppLoading';
import AppErrorMessage from '../UI/AppErrorMessage/AppErrorMessage';
import AppButton from '../UI/AppButton/AppButton';

import { BUTTONS_LABEL, STATUS } from 'utils/const';

import './CharsList.scss';
import useAppActions from '../../hooks/useAppActions';

const CharsList = () => {
  const { chars, status, isEnded } = useAppSelector(({ charList }) => charList);
  const { fetchCharList } = useAppActions();
  const isDisabled = status === STATUS.LOADING || isEnded;

  const buttonLabel = useMemo(() => {
    if (status === STATUS.LOADING) {
      return BUTTONS_LABEL.LOADING;
    } else if (isEnded) {
      return BUTTONS_LABEL.ENDED;
    }
    return BUTTONS_LABEL.LOAD_MORE;
  }, [status, isEnded]);

  useEffect(() => {
    if (!chars.length) {
      fetchCharList();
    }
  }, []);

  return (
    <div className="chars-list__wrapper">
      {status === STATUS.LOADING && !chars.length ? <AppLoading /> : null}
      {status === STATUS.ERROR ? <AppErrorMessage /> : null}
      {chars.length ? (
        <ul className="chars-list">
          {chars.map((item) => (
            <CharListItem chars={item} key={item.id} />
          ))}
        </ul>
      ) : null}
      <div className="chars-list__btn">
        <AppButton
          as="button"
          type="primary"
          disabled={isDisabled}
          onClick={fetchCharList}
        >
          {buttonLabel}
        </AppButton>
      </div>
    </div>
  );
};

export default CharsList;
