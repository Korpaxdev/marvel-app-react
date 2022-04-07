import { ACTIONS } from '../utils/const';

export interface iScreenChangeType {
  type: ACTIONS.CHANGE_TYPE;
  payload: string
}

export interface iScreen {
  type: string;
}

export type screenAction = iScreenChangeType;
