import { PayloadAction } from '@reduxjs/toolkit';
import { TComicsList } from './comicsTranformTypes';
import { STATUS } from 'utils/const';

export type TComicsListInitialState = {
  comics: [] | TComicsList[];
  status: STATUS | '';
  isEnded: boolean;
  offset: number;
};

export type TSetComicsListStatus = PayloadAction<STATUS>
export type TSetComicList = PayloadAction<{comics:TComicsList[], offset:number}>
export type TSetComicsListIsEnded = PayloadAction<void>

export type TComicsListActionsTypes = TSetComicsListStatus | TSetComicList | TSetComicsListIsEnded
