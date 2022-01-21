import { render, screen } from 'test-utils';
import { PostItem } from '.';
import { Post } from 'interfaces';

describe('PostItem', () => {
  let post: Post;

  beforeEach(() => post = {
    commentCount: 999,
    id: '1',
    diggCount: 111,
    text: 'test text',
    hashtags: [{
      id: '3',
      name: 'test hashtag'
    }],
    videoUrl: 'test url',
    authorMeta: {
      id: '4',
      avatar: 'avatar url',
      name: 'john',
      nickName: 'Johnny'
    }
  });

  it('should render properly', () => {
    render(<PostItem post={post} />);
    expect(screen.getByText(post.text)).toBeInTheDocument();
    expect(screen.getByText(`#${post.hashtags[0].name}`)).toBeInTheDocument();
    expect(screen.getByText(post.authorMeta.nickName)).toBeInTheDocument();
    expect(screen.getByText(`Comments count: ${post.commentCount}`)).toBeInTheDocument();
    expect(screen.getByText(`Likes count: ${post.diggCount}`)).toBeInTheDocument();
  });
})
