import { AppDispatch } from '../../store';
import { storeFeed, setError, deleteError } from '../../store/reducer';
import { http } from './http';

export const getFeed = () => async (dispatch: AppDispatch): Promise<any> => {
  try {
    const res = await http('https://tiktok33.p.rapidapi.com/trending/feed');
    const data = await res.json();

    if (res.ok) {
      dispatch(storeFeed(data));
      dispatch(deleteError());
    } else {
      dispatch(setError(data.message));
    }

  } catch (e) {
    dispatch(setError('Check your Internet and reload the page'));
  }
};
