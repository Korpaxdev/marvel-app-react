import { iChar } from 'interfaces/interfaces';
import { ACTIONS } from 'utils/const';

export const selectedChar = (char: iChar) => ({
  type: ACTIONS.SET_SELECTED_CHAR,
  payload: char,
});
export const closeSelectedModal = () => ({type: ACTIONS.CLOSE_SELECTED_MODAL});
