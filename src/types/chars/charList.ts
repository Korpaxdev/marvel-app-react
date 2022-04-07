import { iChar } from './iChars';

import { ACTIONS } from 'utils/const';

export interface iSetCharsList {
  type: ACTIONS.SET_CHARACTERS_LIST;
  payload: {
    chars: iChar[];
    offset: number;
  };
}
export interface iSetCharsListStatus {
  type: ACTIONS.SET_CHARS_LIST_STATUS,
  payload: string
}
export interface iSetCharsListEnded {
  type: ACTIONS.SET_CHARS_LIST_ENDED
}

export interface iCharsList {
  chars: iChar[] | [];
  status: string;
  offset: number;
  isEnded: boolean;
}
export type charsListAction = iSetCharsList | iSetCharsListStatus | iSetCharsListEnded

