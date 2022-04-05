import type { iInitialState } from '../interfaces/interfaces';
import { CHARS__OFFSET } from '../utils/const';

const initialState: iInitialState = {
  type: '',
  randomChar: {
    char: null,
    status: '',
  },
  charsList: {
    chars: [],
    status: '',
    offset: CHARS__OFFSET,
  },
  charInfo: {
    selectedChar: null,
    openModal: false
  }
};
export default initialState;
