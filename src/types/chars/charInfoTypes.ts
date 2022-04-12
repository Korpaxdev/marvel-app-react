import { PayloadAction } from '@reduxjs/toolkit';

import { TChar } from './charsTransformTypes';

export type TInitialStateCharInfo = {
  selectedChar: TChar | null;
  isOpen: boolean;
};
export type TSetSelectedChar = PayloadAction<TChar>;
export type TCloseModal = PayloadAction<void>;
