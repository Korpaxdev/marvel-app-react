import { iAction, iRandomChar } from '../../interfaces/interfaces';
import { ACTIONS } from 'utils/const';

const initialState: iRandomChar = {
  char: null,
  status: '',
};

const charRandomReducer = (state = initialState, action:iAction) => {
  switch (action.type) {
    case ACTIONS.SET_RANDOM:
      return {
        ...state,
        char: action.payload,
      };
    case ACTIONS.SET_RANDOM_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
export default charRandomReducer;
