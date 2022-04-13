import _transformComics from 'utils/comics/_transformComics';
import useRequest from 'hooks/useRequest';

import { comicsListAction } from '../slices/comicsListSlice';

import { Dispatch } from 'redux';
import { RootState } from '../store';
import { TComicsListNotTransform } from 'types/comics/comicsNotTransformTypes';
import { TComicsListActionsTypes } from 'types/comics/comicsListTypes';

import { API, COMICS_LIMIT } from 'utils/const';

const { setComicsListStatus, setComicList, setComicsListIsEnded } =
  comicsListAction;

const fetchComicsList =
  () =>
  async (
    dispatch: Dispatch<TComicsListActionsTypes>,
    getState: () => RootState
  ) => {
    const { offset, isEnded } = getState().comicsList;
    const url = `${API.BASE}/comics?limit=${COMICS_LIMIT}&offset=${offset}&${API.KEY}`;
    const data = await useRequest(url, dispatch, setComicsListStatus);
    const results: TComicsListNotTransform[] = data?.data.results;

    if (results && !isEnded) {
      if (results.length < COMICS_LIMIT) dispatch(setComicsListIsEnded());
      const comics = results.map(_transformComics);
      dispatch(setComicList(comics, offset + COMICS_LIMIT));
    }
  };
export default fetchComicsList;
