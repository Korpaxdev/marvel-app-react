import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useMarvelServices from 'hooks/useMarvelServices';

import CharListItem from '../CharListItem/CharListItem';
import AppLoading from '../UI/AppLoading/AppLoading';
import AppErrorMessage from '../UI/AppErrorMessage/AppErrorMessage';
import AppButton from '../UI/AppButton/AppButton';

import { RootState } from 'store/store';
import { STATUS } from 'utils/const';
import './CharsList.scss';

const CharsList = () => {
  const { getAllChars } = useMarvelServices();
  const { chars, status } = useSelector((state: RootState) => state.charsList);
  const isDisabled = status === STATUS.LOADING;

  useEffect(() => {
    if (!chars.length) {
      getAllChars();
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
          onClick={getAllChars}
        >
          {status === STATUS.LOADING ? 'Loading...' : 'Load more'}
        </AppButton>
      </div>
    </div>
  );
};

export default CharsList;
