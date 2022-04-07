import { iScreen, screenAction } from 'types/screen';

import { ACTIONS } from 'utils/const';

const initialState: iScreen = {
  type: '',
};
const screenReducer = (state = initialState, action:screenAction):iScreen => {
  switch (action.type) {
    case ACTIONS.CHANGE_TYPE:
      return { ...state, type: action.payload };
    default:
      return state
  }
}
export default screenReducer;
