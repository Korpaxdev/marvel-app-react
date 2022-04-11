import { iChar } from './iChars';
import { PayloadAction } from '@reduxjs/toolkit';

export type tInitialStateCharInfo = {
  selectedChar: iChar | null;
  isOpen: boolean;
};
export type tSetSelectedChar = PayloadAction<iChar>;
export type tCloseModal = PayloadAction<void>;
