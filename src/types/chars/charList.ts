import { iChar } from './iChars';

import { STATUS } from 'utils/const';
import { PayloadAction } from '@reduxjs/toolkit';

export type tCharListInitialState = {
  chars: Array<iChar> | [];
  status: string;
  offset: number;
  isEnded: boolean;
}
export type tSetCharListAction = PayloadAction<{chars:iChar[], offset:number}>
export type tSetCharListStatusAction = PayloadAction<STATUS>
export type tSetCharListEnded = PayloadAction<void>

export type tCharsListAction = tSetCharListAction | tSetCharListStatusAction | tSetCharListEnded

