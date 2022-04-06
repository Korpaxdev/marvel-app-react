import { iChar, iCharNotTransform } from 'interfaces/interfaces';
import { ACTIONS, API, CHARS_LIMIT } from 'utils/const';
import { Dispatch } from 'redux';
import { RootState } from '../store';
import useRequest from 'hooks/useRequest';
import _transformCharacters from '../../utils/_transformCharacters';

export const charsList = (chars: iChar[], offset: number) => ({
  type: ACTIONS.SET_CHARACTERS_LIST,
  payload: {
    chars,
    offset,
  },
});
export const charsStatus = (status: string) => ({
  type: ACTIONS.SET_CHARS_LIST_STATUS,
  payload: status,
});

export const setCharsEnded = () => ({ type: ACTIONS.SET_CHARS_LIST_ENDED });

export const fetchCharList =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    const { offset, isEnded } = getState().charList;
    const url = `${API.BASE}/characters?limit=${CHARS_LIMIT}&offset=${offset}&${API.KEY}`;
    const data = await useRequest(url, dispatch, charsStatus);
    const results: iCharNotTransform[] | undefined = data?.data.results;
    if (results && !isEnded) {
      if (results.length < CHARS_LIMIT) dispatch(setCharsEnded());
      const chars = results.map(_transformCharacters);
      dispatch(charsList(chars, offset + CHARS_LIMIT));
    }
  };
