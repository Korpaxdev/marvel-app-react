import { iScreenChangeType } from 'types/screen';

import { ACTIONS } from 'utils/const';

export const type = (type: string): iScreenChangeType => ({
  type: ACTIONS.CHANGE_TYPE,
  payload: type,
});
