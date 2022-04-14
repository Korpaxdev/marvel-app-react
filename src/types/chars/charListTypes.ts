import { PayloadAction } from '@reduxjs/toolkit';

import { TChar } from './charsTransformTypes';

import { STATUS } from 'utils/const';

export type TCharListInitialState = {
  chars: Array<TChar> | [];
  status: string;
  offset: number;
  isEnded: boolean;
};
export type TSetCharListAction = PayloadAction<{
  chars: TChar[];
  offset: number;
}>;
export type TSetCharListStatusAction = PayloadAction<STATUS>;
export type TSetCharListEnded = PayloadAction<void>;

export type TCharsListAction =
  | TSetCharListAction
  | TSetCharListStatusAction
  | TSetCharListEnded;
