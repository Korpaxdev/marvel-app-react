import { combineReducers } from 'redux';
import charInfoReducer from './charInfoReducer';
import charListReducer from './charListReducer';
import charRandomReducer from './charRandomReducer';
import screenReducer from './screenReducer';

const rootReducer = combineReducers({
  charInfo: charInfoReducer,
  charList: charListReducer,
  charRandom: charRandomReducer,
  screen: screenReducer
});
export default rootReducer;
