import { Dispatch } from 'redux';
import useRequest from 'hooks/useRequest';
import _transformCharacters from 'utils/_transformCharacters';

import { tRandomCharActions } from 'types/chars/charRandom';
import { iCharNotTransform } from 'types/chars/iChars';
import { charRandomActions } from '../slices/charRandomSlice';
import { API } from 'utils/const';

const { setRandomStatus, setRandomChar } = charRandomActions;

const fetchRandomChar =
  () => async (dispatch: Dispatch<tRandomCharActions>) => {
    const offset = Math.round(Math.random() * 1560);
    const url = `${API.BASE}/characters?limit=1&offset=${offset}&${API.KEY}`;
    const data = await useRequest(url, dispatch, setRandomStatus);
    const results: iCharNotTransform[] = data?.data.results;
    if (results) {
      const char = _transformCharacters(results[0]);
      dispatch(setRandomChar(char));
    }
  };
export default fetchRandomChar;
