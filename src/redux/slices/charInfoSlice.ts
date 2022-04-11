import { createSlice } from '@reduxjs/toolkit';
import {
  tCloseModal,
  tInitialStateCharInfo,
  tSetSelectedChar,
} from 'types/chars/charInfo';

const initialState: tInitialStateCharInfo = {
  selectedChar: null,
  isOpen: false,
};

const charInfoSlice = createSlice({
  name: 'charInfo',
  initialState,
  reducers: {
    setSelectedChar: (state, { payload }:tSetSelectedChar) => {
      state.selectedChar = payload;
      state.isOpen = true;
    },
    closeModal: (state, action:tCloseModal) => {
      state.isOpen = false;
    }
  }
})
export const {reducer: charInfoReducer, actions: charInfoActions} = charInfoSlice

