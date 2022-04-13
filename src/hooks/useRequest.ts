import { STATUS } from '../utils/const';
import { requestType } from '../types/requestTypes';

const useRequest: requestType = async (url, dispatch, statusAction) => {
  try {
    dispatch(statusAction(STATUS.LOADING));
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      dispatch(statusAction(STATUS.DONE));
      return data;
    } else if (response.status === 404) {
      dispatch(statusAction(STATUS.NOT_FOUND));
    } else {
      dispatch(statusAction(STATUS.ERROR))
    }
  } catch (e) {
    dispatch(statusAction(STATUS.ERROR));
  }
};
export default useRequest;
