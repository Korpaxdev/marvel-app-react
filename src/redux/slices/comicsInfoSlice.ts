import { createSlice } from '@reduxjs/toolkit';

import {
  TComicInfoInitialState,
  TSetComicInfo,
  TSetComicInfoStatus,
} from 'types/comics/comicInfoTypes';

const initialState: TComicInfoInitialState = {
  comic: null,
  status: '',
};

const comicInfoSlice = createSlice({
  name: 'comicInfo',
  initialState,
  reducers: {
    setComicInfoStatus: (state, {payload}:TSetComicInfoStatus) => {
      state.status = payload
    } ,
    setComicInfo: (state, {payload}: TSetComicInfo) => {
      state.comic = payload
    }
  }
})
export const {reducer: comicInfoReducer, actions: comicInfoActions} = comicInfoSlice
