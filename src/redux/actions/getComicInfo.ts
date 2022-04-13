import useRequest from 'hooks/useRequest';
import _transformComics from 'utils/comics/_transformComics';
import { comicInfoActions } from '../slices/comicsInfoSlice';

import { RootState } from '../store';
import { Dispatch } from 'redux';
import { TComicsListNotTransform } from 'types/comics/comicsNotTransformTypes';

import { API, STATUS } from 'utils/const';
import { TComicInfoActions } from 'types/comics/comicInfoTypes';

const { setComicInfoStatus, setComicInfo } = comicInfoActions;

const getComicInfo =
  (id: string) =>
  async (dispatch: Dispatch<TComicInfoActions>, getState: () => RootState) => {
    const { comics } = getState().comicsList;
    const comicWithId = comics.filter(
      (comics) => comics.inApiId === Number(id)
    );
    if (comicWithId.length) {
      dispatch(setComicInfoStatus(STATUS.DONE));
      dispatch(setComicInfo(comicWithId[0]));
    } else {
      await useFetchComicInfo(id, dispatch);
    }
  };
const useFetchComicInfo = async (
  id: string,
  dispatch: Dispatch<TComicInfoActions>
) => {
  const url = `${API.BASE}/comics/${id}?${API.KEY}`;
  const data = await useRequest(url, dispatch, setComicInfoStatus);
  const results: TComicsListNotTransform[] | undefined = data?.data.results;
  if (results) {
    const comic = _transformComics(results[0]);
    dispatch(setComicInfo(comic));
  }
};

export default getComicInfo;
