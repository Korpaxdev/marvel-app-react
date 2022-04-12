import { PayloadAction } from '@reduxjs/toolkit';

import { TChar } from './charsTransformTypes';

import { STATUS } from 'utils/const';

export type TRandomCharInitialState = {
  char: TChar | null;
  status: STATUS | ''
}
export type TSetRandomCharAction = PayloadAction<TChar>;
export type TSetRandomCharStatusAction = PayloadAction<STATUS>;

export type TRandomCharActions = TSetRandomCharAction | TSetRandomCharStatusAction;
