import initialState from './initialStore';
import { ACTIONS, SCREEN_TYPE } from '../utils/const';

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIONS.CHANGE_TYPE:
      return { ...state, type: action.payload };
    case ACTIONS.SET_RANDOM:
      return {
        ...state,
        randomChar: { ...state.randomChar, char: action.payload },
      };
    case ACTIONS.SET_RANDOM_STATUS:
      return {
        ...state,
        randomChar: { ...state.randomChar, status: action.payload },
      };
    case ACTIONS.SET_CHARACTERS_LIST:
      return {
        ...state,
        charsList: {
          ...state.charsList,
          chars: [...state.charsList.chars, ...action.payload],
          offset: action.offset,
        },
      };
    case ACTIONS.SET_CHARS_LIST_STATUS:
      return {
        ...state,
        charsList: {
          ...state.charsList,
          status: action.payload,
        },
      };
    case ACTIONS.SET_SELECTED_CHAR: {
      const char = state.charsList.chars.filter(
        (item) => item.id === action.payload
      );
      const open = state.type !== SCREEN_TYPE.DESKTOP;
      return {
        ...state,
        charInfo: {
          openModal: open,
          selectedChar: char[0],
        },
      };
    }
    case 'CLOSE_SELECTED_MODAL': {
      return {
        ...state,
        charInfo: {
          ...state.charInfo,
          openModal: false,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
