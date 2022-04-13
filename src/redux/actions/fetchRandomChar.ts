import useRequest from 'hooks/useRequest';
import _transformCharacters from 'utils/characters/_transformCharacters';

import { charRandomActions } from '../slices/charRandomSlice';

import { Dispatch } from 'redux';
import { TRandomCharActions } from 'types/chars/charRandomTypes';
import { TCharNotTransform } from 'types/chars/charsNotTransformTypes';

import { API } from 'utils/const';

const { setRandomStatus, setRandomChar } = charRandomActions;

const fetchRandomChar =
  () => async (dispatch: Dispatch<TRandomCharActions>) => {
    const offset = Math.round(Math.random() * 1560);
    const url = `${API.BASE}/characters?limit=1&offset=${offset}&${API.KEY}`;
    const data = await useRequest(url, dispatch, setRandomStatus);
    const results: TCharNotTransform[] = data?.data.results;

    if (results) {
      const char = _transformCharacters(results[0]);
      dispatch(setRandomChar(char));
    }
  };
export default fetchRandomChar;
