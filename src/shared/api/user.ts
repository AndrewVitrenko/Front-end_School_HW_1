import { AppDispatch } from '../../store';
import { storeUserInfo, setError, deleteError, storeUserFeed } from '../../store/reducer';
import { http } from './http';

export const getUserInfo = () => async (dispatch: AppDispatch): Promise<any> => {
  try {
    const res = await http('https://tiktok33.p.rapidapi.com/user/info/dave.xp');
    const data = await res.json();

    if (res.ok) {
      dispatch(storeUserInfo(data));
      dispatch(deleteError());
    } else {
      dispatch(setError(data.message));
    }

  } catch (e) {
    dispatch(setError('Check your Internet and reload the page'));
  } 
};

export const getUserFeed = () => async (dispatch: AppDispatch): Promise<any> => {
  try {
    const res = await http('https://tiktok33.p.rapidapi.com/user/feed/dave.xp');
    const data = await res.json();

    if (res.ok) {
      dispatch(storeUserFeed(data));
      dispatch(deleteError());
    } else {
      dispatch(setError(data.message));
    }

  } catch (e) {
    dispatch(setError('Check your Internet and reload the page'));
  }

  
};
