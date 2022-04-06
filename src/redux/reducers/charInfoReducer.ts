import { iAction, iCharInfo } from 'interfaces/interfaces';
import { ACTIONS } from 'utils/const';

const initialState: iCharInfo = {
  selectedChar: null,
  isOpen: false,
};
const charInfoReducer = (state = initialState, action: iAction) => {
  switch (action.type) {
    case ACTIONS.SET_SELECTED_CHAR:
      return {
        ...state,
        selectedChar: action.payload,
        isOpen: true
      };
    case ACTIONS.CLOSE_SELECTED_MODAL: {
      return {
        ...state,
        isOpen: false,
      };
    }
    default:
      return state;
  }
};
export default charInfoReducer;
