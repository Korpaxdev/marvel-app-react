import { bindActionCreators } from 'redux';
import * as charListActions from 'redux/actions/fetchCharList';
import { useDispatch } from 'react-redux';
import { screenActions } from '../redux/slices/screenSlice';
import { charInfoActions } from '../redux/slices/charInfoSlice';
import fetchCharList from 'redux/actions/fetchCharList';
import fetchRandomChar from '../redux/actions/fetchRandomChar';

const useAppActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      fetchCharList,
      fetchRandomChar,
      ...charListActions,
      ...screenActions,
      ...charInfoActions,
    },
    dispatch
  );
};

export default useAppActions;
