import useRequest from 'hooks/useRequest';
import _transformCharacters from 'utils/characters/_transformCharacters';

import { charListActions } from '../slices/charListSlice';
import { API, CHARS_LIMIT } from 'utils/const';

import { Dispatch } from 'redux';
import { RootState } from '../store';
import { TCharsListAction } from 'types/chars/charListTypes';
import { TCharNotTransform } from 'types/chars/charsNotTransformTypes';

const { setCharList, setCharListEnded, setCharListStatus } = charListActions;

const fetchCharList =
  () =>
  async (dispatch: Dispatch<TCharsListAction>, getState: () => RootState) => {
    const { offset, isEnded } = getState().charList;
    const url = `${API.BASE}/characters?limit=${CHARS_LIMIT}&offset=${offset}&${API.KEY}`;
    const data = await useRequest(url, dispatch, setCharListStatus);
    const results: TCharNotTransform[] | undefined = data?.data.results;

    if (results && !isEnded) {
      if (results.length < CHARS_LIMIT) dispatch(setCharListEnded());
      const chars = results.map(_transformCharacters);
      dispatch(setCharList(chars, offset + CHARS_LIMIT));
    }
  };
export default fetchCharList;
