import { ACTIONS } from 'utils/const';

export const type = (type: string) => ({
  type: ACTIONS.CHANGE_TYPE,
  payload: type,
});
