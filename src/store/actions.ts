import { ACTIONS } from '../utils/const';
import { iChar } from '../interfaces/interfaces';

export const type = (type: string) => ({
  type: ACTIONS.CHANGE_TYPE,
  payload: type,
});
export const randomChar = (char: iChar) => ({
  type: ACTIONS.SET_RANDOM,
  payload: char,
});
export const charsList = (chars: iChar[], offset: number) => ({
  type: ACTIONS.SET_CHARACTERS_LIST,
  payload: chars,
  offset,
});
export const randomStatus = (status: string) => ({
  type: ACTIONS.SET_RANDOM_STATUS,
  payload: status,
});
export const charsStatus = (status: string) => ({
  type: ACTIONS.SET_CHARS_LIST_STATUS,
  payload: status,
});
export const selectedChar = (id: number) => ({
  type: ACTIONS.SET_SELECTED_CHAR,
  payload: id,
});
export const closeSelectedModal = () => ({
  type: ACTIONS.CLOSE_SELECTED_MODAL
});
