import { STATUS } from '../utils/const';
import { Dispatch } from 'redux';

type statusAction = (status: string) => { type: string };
type requestType =  (url: string, dispatch:Dispatch, statusAction: statusAction) => Promise<any>

const useRequest:requestType = async (url, dispatch, statusAction) => {
  try {
    dispatch(statusAction(STATUS.LOADING));
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      dispatch(statusAction(STATUS.DONE));
      return data;
    } else {
      dispatch(statusAction(STATUS.ERROR));
    }
  } catch (e) {
    dispatch(statusAction(STATUS.ERROR));
  }
};
export default useRequest;
