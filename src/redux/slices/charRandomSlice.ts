import { createSlice } from '@reduxjs/toolkit';
import {
  tRandomCharInitialState,
  tSetRandomCharAction,
  tSetRandomCharStatusAction,
} from 'types/chars/charRandom';

const initialState: tRandomCharInitialState = {
  char: null,
  status: '',
};

const charRandomSlice = createSlice({
  name: 'charRandom',
  initialState,
  reducers: {
    setRandomChar: (state, action: tSetRandomCharAction) => {
      state.char = action.payload;
    },
    setRandomStatus: (state, action: tSetRandomCharStatusAction) => {
      state.status = action.payload;
    },
  },
});


export const { reducer: charRandomReducer, actions: charRandomActions } =
  charRandomSlice;
