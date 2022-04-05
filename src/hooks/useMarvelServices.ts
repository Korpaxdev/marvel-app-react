import { useDispatch } from 'react-redux';
import useRequest from './useRequest';
import _transformCharacters from '../utils/_transformCharacters';
import {
  charsList,
  charsStatus,
  randomChar,
  randomStatus,
} from '../store/actions';
import { API, CHARS_LIMIT } from '../utils/const';
import { iCharNotTransform } from '../interfaces/interfaces';
import store from '../store/store';

export default function useMarvelServices() {
  const { request } = useRequest();
  const dispatch = useDispatch();

  async function getRandomChar() {
    const offset = Math.round(Math.random() * 1560);
    const url = `${API.BASE}/characters?limit=1&offset=${offset}&${API.KEY}`;
    const results: iCharNotTransform[] | undefined = await request(
      url,
      randomStatus
    );
    if (results) {
      const char = _transformCharacters(results[0]);
      dispatch(randomChar(char));
    }
  }

  async function getAllChars() {
    const { offset } = store.getState().charsList;
    const url = `${API.BASE}/characters?limit=${CHARS_LIMIT}&offset=${offset}&${API.KEY}`;
    const results: iCharNotTransform[] | undefined = await request(
      url,
      charsStatus
    );
    if (results) {
      const chars = results.map(_transformCharacters);
      dispatch(charsList(chars, offset + CHARS_LIMIT));
    }
  }

  return { getRandomChar, getAllChars };
}
