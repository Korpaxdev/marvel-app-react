import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { screenActions } from '../redux/slices/screenSlice';
import { charInfoActions } from '../redux/slices/charInfoSlice';
import { comicsListAction } from '../redux/slices/comicsListSlice';
import fetchCharList from 'redux/actions/fetchCharList';
import fetchRandomChar from '../redux/actions/fetchRandomChar';
import fetchComicsList from '../redux/actions/fetchComicsList';
import getComicInfo from '../redux/actions/getComicInfo';

const useAppActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      fetchCharList,
      fetchRandomChar,
      fetchComicsList,
      getComicInfo,
      ...screenActions,
      ...charInfoActions,
      ...comicsListAction,
    },
    dispatch
  );
};

export default useAppActions;
