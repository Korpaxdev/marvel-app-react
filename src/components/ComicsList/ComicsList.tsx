import React, { useEffect, useMemo } from 'react';
import useAppActions from 'hooks/useAppActions';
import useAppSelector from 'hooks/useAppSelector';

import ComicsListItem from '../ComicsListItem/ComicsListItem';
import AppButton from '../UI/AppButton/AppButton';
import AppLoading from '../UI/AppLoading/AppLoading';
import AppErrorMessage from '../UI/AppErrorMessage/AppErrorMessage';

import { BUTTONS_LABEL, STATUS } from 'utils/const';

import './ComicsList.scss';

const ComicsList = () => {
  const { fetchComicsList } = useAppActions();
  const { comics, status, isEnded } = useAppSelector(
    (state) => state.comicsList
  );
  const isDisabled = status === 'LOADING' || isEnded;

  const buttonLabel = useMemo(() => {
    if (status === 'LOADING') return BUTTONS_LABEL.LOADING;
    if (isEnded) return BUTTONS_LABEL.COMICS_ENDED;
    return BUTTONS_LABEL.LOAD_MORE;
  }, [status, isEnded]);

  useEffect(() => {
    if (!comics.length) {
      fetchComicsList();
    }
  }, []);
  return (
    <div className="comics-list__wrapper">
      {status === STATUS.LOADING && !comics.length && <AppLoading />}
      {comics.length > 0 && (
        <ul className="comics-list">
          {comics.map((comicBook) => {
            return <ComicsListItem comicBook={comicBook} key={comicBook.id} />;
          })}
        </ul>
      )}
      {status === STATUS.ERROR && <AppErrorMessage />}
      <div className="comics-list__button">
        <AppButton
          as="button"
          type="primary"
          disabled={isDisabled}
          onClick={fetchComicsList}
        >
          {buttonLabel}
        </AppButton>
      </div>
    </div>
  );
};

export default ComicsList;
