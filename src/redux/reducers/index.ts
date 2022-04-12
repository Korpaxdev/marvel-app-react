import { charInfoReducer } from '../slices/charInfoSlice';
import { charListReducer } from '../slices/charListSlice';
import { screenReducer } from '../slices/screenSlice';
import { charRandomReducer } from '../slices/charRandomSlice';
import { comicsListReducer } from '../slices/comicsListSlice';

const rootReducer = {
  charInfo: charInfoReducer,
  charList: charListReducer,
  charRandom: charRandomReducer,
  screen: screenReducer,
  comicsList: comicsListReducer
};

export default rootReducer;
