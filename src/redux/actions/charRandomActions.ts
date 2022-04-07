import { Dispatch } from 'redux';
import useRequest from 'hooks/useRequest';
import _transformCharacters from 'utils/_transformCharacters';

import { iSetRandom, iSetRandomStatus, randomAction } from 'types/chars/charRandom';
import { iChar, iCharNotTransform } from 'types/chars/iChars';

import { ACTIONS, API } from 'utils/const';

export const randomChar = (char: iChar):iSetRandom => ({
  type: ACTIONS.SET_RANDOM,
  payload: char,
});
export const randomStatus = (status: string):iSetRandomStatus => ({
  type: ACTIONS.SET_RANDOM_STATUS,
  payload: status,
});

export const fetchRandomChar = () => async (dispatch: Dispatch<randomAction>) => {
  const offset = Math.round(Math.random() * 1560);
  const url = `${API.BASE}/characters?limit=1&offset=${offset}&${API.KEY}`
  const data = await useRequest(url, dispatch, randomStatus)
  const results:iCharNotTransform[] = data?.data.results
  if (results) {
    const char = _transformCharacters(results[0])
    dispatch(randomChar(char))
  }
};
