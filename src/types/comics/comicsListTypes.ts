import { PayloadAction } from '@reduxjs/toolkit';
import { TComic } from './comicsTranformTypes';
import { STATUS } from 'utils/const';

export type TComicsListInitialState = {
  comics: [] | TComic[];
  status: STATUS | '';
  isEnded: boolean;
  offset: number;
};

export type TSetComicsListStatus = PayloadAction<STATUS>
export type TSetComicList = PayloadAction<{comics:TComic[], offset:number}>
export type TSetComicsListIsEnded = PayloadAction<void>

export type TComicsListActionsTypes = TSetComicsListStatus | TSetComicList | TSetComicsListIsEnded
