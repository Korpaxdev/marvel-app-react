import { iChar } from './iChars';

import { ACTIONS } from 'utils/const';


export interface iSetRandom {
  type: ACTIONS.SET_RANDOM,
  payload: iChar
}
export interface iSetRandomStatus {
  type: ACTIONS.SET_RANDOM_STATUS,
  payload: string
}

export interface iRandomChar {
  char: iChar | null;
  status: string;
}
export type randomAction = iSetRandom | iSetRandomStatus
