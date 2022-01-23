import { Store, User, Post, Video } from 'interfaces';
import reducer, {
  storeFeed,
  storeUserFeed,
  setError,
  storeUserInfo,
  deleteError
} from 'store/reducer';

describe('testing reducer', () => {
  let initialState: Store; 
  
  beforeEach(() => initialState = {
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
  });

  it('should return default state', () => {
    expect(reducer(undefined, { type: 'test action' })).toEqual(initialState);
  });

  it('should add error', () => {
    expect(reducer(initialState, setError('Test Error'))).toEqual({
      ...initialState,
      error: 'Test Error'
    });
  });

  it('should delete an error', () => {
    initialState.error = 'Test Error';
    expect(reducer(initialState, deleteError())).toEqual({
      ...initialState,
      error: ''
    });
  });

  it('should store user info', () => {
    const userInfo: User = {
      id: '1',
      nickname: 'me',
      avatarLarger: 'some image',
      privateAccount: false,
      signature: 'bla bla bla'
    };

    expect(reducer(initialState, storeUserInfo(userInfo))).toEqual({
      ...initialState,
      user: userInfo
    })
  });

  it('should store trending feed', () => {
    const post: Post = {
      id: '1',
      text: 'post text',
      videoUrl: 'url',
      hashtags: [{
        id: '2',
        name: 'hashtag'
      }],
      diggCount: 555,
      commentCount: 1000,
      authorMeta: {
        avatar: 'avatar',
        id: '32',
        name: 'Andrew',
        nickName: 'andrew'
      }
    }

    expect(reducer(initialState, storeFeed([post]))).toEqual({
      ...initialState,
      feed: [post]
    })
  });

  it('should store user feed', () => {
    const userVideo: Video = {
      id: '4',
      stats: {
        playCount: 444
      },
      video: {
        playAddr: 'test url'
      }
    }

    expect(reducer(initialState, storeUserFeed([userVideo]))).toEqual({
      ...initialState,
      userFeed: [userVideo]
    })
  });
});