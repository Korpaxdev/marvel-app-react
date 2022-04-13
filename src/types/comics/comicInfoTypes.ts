import { TComic } from './comicsTranformTypes';
import { PayloadAction } from '@reduxjs/toolkit';

import { STATUS } from 'utils/const';

export type TComicInfoInitialState = {
  comic: null | TComic,
  status: '' | STATUS
}

export type TSetComicInfoStatus = PayloadAction<STATUS>
export type TSetComicInfo = PayloadAction<TComic>

export type TComicInfoActions = TSetComicInfoStatus | TSetComicInfo
