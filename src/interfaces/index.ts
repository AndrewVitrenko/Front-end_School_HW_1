import { ChangeEvent } from 'react';

export interface Post {
  authorMeta: {
    id: string;
    avatar: string;
    name: string;
    nickName: string;
  };
  commentCount: number;
  diggCount: number;
  hashtags: Array<{
    id: string;
    name: string;
  }>;
  id: string;
  text: string;
  videoUrl: string;
}

export interface User {
  id: string;
  nickname: string;
  avatarLarger: string;
  signature: string;
  privateAccount: boolean;
}

export interface Video {
  id: string;
  video: {
    playAddr: string;
  };
  stats: {
    playCount: number;
  };
}

export interface Store {
  feed: Post[];
  user: User;
  userFeed: Video[];
  error: string;
}

export interface PaginationProps {
  handleChange: (e: ChangeEvent<unknown>, p: number) => void;
  current: number;
  perPage: number;
  length: number;
}
