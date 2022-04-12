import { createSlice } from '@reduxjs/toolkit';

import {
  TCharListInitialState,
  TSetCharListAction,
  TSetCharListEnded,
  TSetCharListStatusAction,
} from 'types/chars/charListTypes';
import { TChar } from 'types/chars/charsTransformTypes';

import { CHARS__OFFSET } from 'utils/const';

const initialState: TCharListInitialState = {
  chars: [],
  status: '',
  offset: CHARS__OFFSET,
  isEnded: false,
};

const charListSlice = createSlice({
  name: 'charList',
  initialState,
  reducers: {
    setCharList: {
      reducer: (state, { payload }: TSetCharListAction) => {
        state.chars = [...state.chars, ...payload.chars];
        state.offset = payload.offset;
      },
      prepare: (chars: TChar[], offset: number) => ({
        payload: { chars, offset },
      }),
    },
    setCharListStatus: (state, { payload }: TSetCharListStatusAction) => {
      state.status = payload;
    },
    setCharListEnded: (state, action: TSetCharListEnded) => {
      state.isEnded = true;
    },
  },
});

export const { reducer: charListReducer, actions: charListActions } =
  charListSlice;
