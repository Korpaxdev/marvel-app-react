import { createSlice } from '@reduxjs/toolkit';

import {
  TCloseModal,
  TInitialStateCharInfo,
  TOpenModal,
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
    },
    openSelectedCharModal: (state, action: TOpenModal) => {
      state.isOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeSelectedCharModal: (state, action: TCloseModal) => {
      state.isOpen = false;
      document.body.style.overflow = '';
    },
  },
});
export const { reducer: charInfoReducer, actions: charInfoActions } =
  charInfoSlice;
