import { iRandomChar, randomAction } from 'types/chars/charRandom';

import { ACTIONS } from 'utils/const';

const initialState: iRandomChar = {
  char: null,
  status: '',
};

const charRandomReducer = (state = initialState, action:randomAction):iRandomChar => {
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
