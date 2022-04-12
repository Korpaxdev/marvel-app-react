export const API = {
  KEY: 'apikey=8178973bd823e4f1b41eeec85f1b9a50',
  BASE: 'https://gateway.marvel.com:443/v1/public',
};

export enum SCREEN_TYPE {
  DESKTOP = 'DESKTOP',
  TABLET = 'TABLET',
  MOBILE = 'MOBILE',
}

export enum STATUS {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  DONE = 'DONE',
}

export enum MEDIA_QUERIES {
  MOBILE = '(max-width: 768px)',
  TABLET = '(min-width: 768px) and (max-width: 1254px)',
  DESKTOP = '(min-width: 1254px)',
}

export enum ACTIONS {
  CHANGE_TYPE = 'CHANGE_TYPE',
  SET_RANDOM = 'SET_RANDOM',
  SET_RANDOM_STATUS = 'SET_RANDOM_STATUS',
  SET_CHARACTERS_LIST = 'SET_CHARACTERS_LIST',
  SET_CHARS_LIST_STATUS = 'SET_CHARS_LIST_STATUS',
  SET_CHARS_LIST_ENDED = 'SET_CHARS_LIST_ENDED',
  SET_SELECTED_CHAR = 'SET_SELECTED_CHAR',
  CLOSE_SELECTED_MODAL = 'CLOSE_SELECTED_MODAL',
}

export const CHARS_LIMIT = 9;
export const CHARS__OFFSET = 0;
export const COMICS_LIMIT = 8;
export const COMICS_OFFSET = 0;

export enum BUTTONS_LABEL {
  LOADING = 'LOADING...',
  TRY_IT = 'TRY IT',
  LOAD_MORE = 'LOAD MORE',
  CHAR_ENDED = 'CHAR LIST IS ENDED',
  COMICS_ENDED = 'COMICS LIST IS ENDED'

}
export const NOT_FOR_SELL = 'NOT FOR SELL'
export const MOTION = {
  INIT: {opacity: 0},
  ANIMATE: {opacity: 1},
  LIST_TRANSITION: { duration: 0.1, ease: 'easeIn' }
}
