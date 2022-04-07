import { Dispatch } from 'redux';
import useRequest from 'hooks/useRequest';
import _transformCharacters from 'utils/_transformCharacters';

import { charsListAction, iSetCharsList, iSetCharsListEnded, iSetCharsListStatus } from 'types/chars/charList';
import { iChar, iCharNotTransform } from 'types/chars/iChars';
import { RootState } from '../reducers';

import { ACTIONS, API, CHARS_LIMIT } from 'utils/const';

export const charsList = (chars: iChar[], offset: number):iSetCharsList => ({
  type: ACTIONS.SET_CHARACTERS_LIST,
  payload: {
    chars,
    offset,
  },
});
export const charsStatus = (status: string):iSetCharsListStatus => ({
  type: ACTIONS.SET_CHARS_LIST_STATUS,
  payload: status,
});

export const setCharsEnded = ():iSetCharsListEnded => ({ type: ACTIONS.SET_CHARS_LIST_ENDED });

export const fetchCharList =
  () => async (dispatch: Dispatch<charsListAction>, getState: () => RootState) => {
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
