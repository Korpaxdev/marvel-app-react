import { charInfoReducer } from '../slices/charInfoSlice';
import { charListReducer } from '../slices/charListSlice';
import { screenReducer } from '../slices/screenSlice';
import { charRandomReducer } from '../slices/charRandomSlice';

const rootReducer = {
  charInfo: charInfoReducer,
  charList: charListReducer,
  charRandom: charRandomReducer,
  screen: screenReducer,
};

export default rootReducer;
