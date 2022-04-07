import { iChar } from './iChars';

import { ACTIONS } from 'utils/const';

export interface iSelectedChar {
  type: ACTIONS.SET_SELECTED_CHAR,
  payload: iChar,
}
export interface iCloseSelectedModal {
  type: ACTIONS.CLOSE_SELECTED_MODAL,
}

export interface iCharInfo {
  selectedChar: iChar | null;
  isOpen: boolean;
}

export type charInfoAction = iSelectedChar | iCloseSelectedModal
