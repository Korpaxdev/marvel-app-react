import { charsListAction, iCharsList } from 'types/chars/charList';

import { ACTIONS, CHARS__OFFSET } from 'utils/const';

const initialState: iCharsList = {
  chars: [],
  status: '',
  offset: CHARS__OFFSET,
  isEnded: false,
};

const charListReducer = (state = initialState, action: charsListAction):iCharsList => {
  switch (action.type) {
    case ACTIONS.SET_CHARACTERS_LIST:
      return {
        ...state,
        chars: [...state.chars, ...action.payload.chars],
        offset: action.payload.offset,
      };
    case ACTIONS.SET_CHARS_LIST_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case ACTIONS.SET_CHARS_LIST_ENDED: {
      return {
        ...state,
        isEnded: true,
      };
    }
    default:
      return state;
  }
};
export default charListReducer;
