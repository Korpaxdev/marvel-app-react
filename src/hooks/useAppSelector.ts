import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
