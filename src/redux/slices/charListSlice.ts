import { createSlice } from '@reduxjs/toolkit';
import {
  tCharListInitialState,
  tSetCharListAction,
  tSetCharListEnded,
  tSetCharListStatusAction,
} from 'types/chars/charList';
import { iChar } from 'types/chars/iChars';

import { CHARS__OFFSET } from 'utils/const';

const initialState: tCharListInitialState = {
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
      reducer: (state, { payload }: tSetCharListAction) => {
        state.chars = [...state.chars, ...payload.chars];
        state.offset = payload.offset;
      },
      prepare: (chars: iChar[], offset: number) => ({
        payload: { chars, offset },
      }),
    },
    setCharListStatus: (state, { payload }: tSetCharListStatusAction) => {
     state.status = payload;
    },
    setCharListEnded: (state, action: tSetCharListEnded) => {
      state.isEnded = true;
    },
  },
});

export const { reducer: charListReducer, actions: charListActions } =
  charListSlice;
