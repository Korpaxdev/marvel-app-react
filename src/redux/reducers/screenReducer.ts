import { iAction } from '../../interfaces/interfaces';
import { ACTIONS } from '../../utils/const';

const initialState = {
  type: ''
}
const screenReducer = (state = initialState, action:iAction) => {
  switch (action.type) {
    case ACTIONS.CHANGE_TYPE:
      return { ...state, type: action.payload };
    default:
      return state
  }
}
export default screenReducer;
