import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post, Store, User, Video } from 'shared/interfaces';

const initialState: Store = {
  feed: [],
  user: {
    id: '',
    nickname: '',
    avatarLarger: '',
    signature: '',
    privateAccount: false,
  },
  userFeed: [],
  error: '',
};

const rootReducer = createSlice({
  name: 'rootReducer',
  initialState,
  reducers: {
    storeFeed(store, action: PayloadAction<Post[]>) {
      store.feed = action.payload;
    },
    storeUserInfo(store, action: PayloadAction<User>) {
      store.user = action.payload;
    },
    setError(store, action: PayloadAction<string>) {
      store.error = action.payload;
    },
    deleteError(store) {
      store.error = '';
    },
    storeUserFeed(store, action: PayloadAction<Video[]>) {
      store.userFeed = action.payload;
    },
  },
});

export const {
  storeFeed,
  storeUserInfo,
  setError,
  deleteError,
  storeUserFeed,
} = rootReducer.actions;
export default rootReducer.reducer;
