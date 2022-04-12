import { SCREEN_TYPE } from '../utils/const';
import { PayloadAction } from '@reduxjs/toolkit';

export type tScreenInitialState = {
  type: SCREEN_TYPE | '';
};
export type tScreenChangeType = PayloadAction<SCREEN_TYPE>
