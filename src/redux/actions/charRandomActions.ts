import { iChar, iCharNotTransform } from 'interfaces/interfaces';
import { ACTIONS, API } from 'utils/const';
import useRequest from 'hooks/useRequest';
import _transformCharacters from '../../utils/_transformCharacters';
import { Dispatch } from 'redux';

export const randomChar = (char: iChar) => ({
  type: ACTIONS.SET_RANDOM,
  payload: char,
});
export const randomStatus = (status: string) => ({
  type: ACTIONS.SET_RANDOM_STATUS,
  payload: status,
});

export const fetchRandomChar = () => async (dispatch: Dispatch) => {
  const offset = Math.round(Math.random() * 1560);
  const url = `${API.BASE}/characters?limit=1&offset=${offset}&${API.KEY}`
  const data = await useRequest(url, dispatch, randomStatus)
  const results:iCharNotTransform[] = data?.data.results
  if (results) {
    const char = _transformCharacters(results[0])
    dispatch(randomChar(char))
  }
};
