import { createSlice } from '@reduxjs/toolkit';

import {
  TCloseModal,
  TInitialStateCharInfo,
  TSetSelectedChar,
} from 'types/chars/charInfoTypes';

const initialState: TInitialStateCharInfo = {
  selectedChar: null,
  isOpen: false,
};

const charInfoSlice = createSlice({
  name: 'charInfo',
  initialState,
  reducers: {
    setSelectedChar: (state, { payload }: TSetSelectedChar) => {
      state.selectedChar = payload;
      state.isOpen = true;
    },
    closeModal: (state, action: TCloseModal) => {
      state.isOpen = false;
    },
  },
});
export const { reducer: charInfoReducer, actions: charInfoActions } =
  charInfoSlice;
