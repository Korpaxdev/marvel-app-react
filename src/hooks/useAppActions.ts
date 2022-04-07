import { bindActionCreators } from 'redux';
import * as charInfoActions from 'redux/actions/charInfoActions';
import * as charRandomActions from 'redux/actions/charRandomActions';
import * as charListActions from 'redux/actions/charListActions';
import * as screenActions from 'redux/actions/screenActions';
import { useDispatch } from 'react-redux';

const useAppActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...charInfoActions,
      ...charRandomActions,
      ...charListActions,
      ...screenActions,
    },
    dispatch
  );
};
export default useAppActions;
