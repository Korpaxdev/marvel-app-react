import { STATUS } from '../utils/const';
import { useDispatch } from 'react-redux';

export default function useRequest() {
  const dispatch = useDispatch()

  async function request(url: string, changeStatus:(status:string)=>{}) {
    try {
      dispatch(changeStatus(STATUS.LOADING));
      const request = await fetch(url);
      if (request.ok) {
        const data =  await request.json();
        dispatch(changeStatus(STATUS.DONE))
        return data?.data.results
      } else {
        dispatch(changeStatus(STATUS.ERROR));
      }
    } catch (e) {
      dispatch(changeStatus(STATUS.ERROR));
    }
  }

  return { request };
}
