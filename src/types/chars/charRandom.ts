import { iChar } from './iChars';

import { STATUS } from 'utils/const';
import { PayloadAction } from '@reduxjs/toolkit';

export type tRandomCharInitialState = {
  char: iChar | null;
  status: STATUS | ''
}
export type tSetRandomCharAction = PayloadAction<iChar>;
export type tSetRandomCharStatusAction = PayloadAction<STATUS>;

export type tRandomCharActions = tSetRandomCharAction | tSetRandomCharStatusAction;
