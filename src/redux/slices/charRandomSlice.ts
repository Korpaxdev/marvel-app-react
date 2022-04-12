import { createSlice } from '@reduxjs/toolkit';

import {
  TRandomCharInitialState,
  TSetRandomCharAction,
  TSetRandomCharStatusAction,
} from 'types/chars/charRandomTypes';

const initialState: TRandomCharInitialState = {
  char: null,
  status: '',
};

const charRandomSlice = createSlice({
  name: 'charRandom',
  initialState,
  reducers: {
    setRandomChar: (state, action: TSetRandomCharAction) => {
      state.char = action.payload;
    },
    setRandomStatus: (state, action: TSetRandomCharStatusAction) => {
      state.status = action.payload;
    },
  },
});

export const { reducer: charRandomReducer, actions: charRandomActions } =
  charRandomSlice;
