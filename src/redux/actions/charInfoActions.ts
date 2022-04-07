import { iChar } from 'types/chars/iChars';
import { iCloseSelectedModal, iSelectedChar } from 'types/chars/charInfo';

import { ACTIONS } from 'utils/const';

export const selectedChar = (char: iChar): iSelectedChar => ({
  type: ACTIONS.SET_SELECTED_CHAR,
  payload: char,
});
export const closeSelectedModal = (): iCloseSelectedModal => ({
  type: ACTIONS.CLOSE_SELECTED_MODAL,
});
