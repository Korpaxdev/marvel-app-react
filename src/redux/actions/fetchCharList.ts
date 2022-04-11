import { Dispatch } from 'redux';
import useRequest from 'hooks/useRequest';
import _transformCharacters from 'utils/_transformCharacters';

import { tCharsListAction } from 'types/chars/charList';
import { iCharNotTransform } from 'types/chars/iChars';
import { RootState } from '../store';
import { charListActions } from '../slices/charListSlice';
import { API, CHARS_LIMIT } from 'utils/const';

const { setCharList, setCharListEnded, setCharListStatus } = charListActions;

const fetchCharList =
  () =>
  async (dispatch: Dispatch<tCharsListAction>, getState: () => RootState) => {
    const { offset, isEnded } = getState().charList;
    const url = `${API.BASE}/characters?limit=${CHARS_LIMIT}&offset=${offset}&${API.KEY}`;
    const data = await useRequest(url, dispatch, setCharListStatus);
    const results: iCharNotTransform[] | undefined = data?.data.results;
    if (results && !isEnded) {
      if (results.length < CHARS_LIMIT) dispatch(setCharListEnded());
      const chars = results.map(_transformCharacters);
      dispatch(setCharList(chars, offset + CHARS_LIMIT));
    }
  };
export default fetchCharList;
