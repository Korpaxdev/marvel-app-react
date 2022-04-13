import { createSlice } from '@reduxjs/toolkit';

import { TComic } from 'types/comics/comicsTranformTypes';
import {
  TComicsListInitialState,
  TSetComicList,
  TSetComicsListIsEnded,
  TSetComicsListStatus,
} from 'types/comics/comicsListTypes';

import { COMICS_OFFSET } from 'utils/const';

const initialState: TComicsListInitialState = {
  comics: [],
  status: '',
  isEnded: false,
  offset: COMICS_OFFSET,
};

const comicsListSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    setComicsListStatus: (state, { payload }: TSetComicsListStatus) => {
      state.status = payload;
    },
    setComicList: {
      reducer: (state, { payload }: TSetComicList) => {
        state.comics = [...state.comics, ...payload.comics];
        state.offset = payload.offset;
      },
      prepare: (comics: TComic[], offset: number) => ({
        payload: { comics, offset },
      }),
    },
    setComicsListIsEnded: (state, action: TSetComicsListIsEnded) => {
      state.isEnded = true;
    },
  },
});
export const { reducer: comicsListReducer, actions: comicsListAction } =
  comicsListSlice;
