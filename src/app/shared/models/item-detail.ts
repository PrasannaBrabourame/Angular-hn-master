import { Comment } from './comment';
import { PollResult } from './poll-result';
import { FeedType } from './feed-type';

export interface ItemDetail {
  comments: Comment[];
  comments_count: number;
  content: string;
  dead: boolean;
  deleted: boolean;
  domain: string;
  id: number;
  points: number;
  poll: PollResult[];
  poll_votes_count: number;
  time: number;
  time_ago: string;
  title: string;
  type: FeedType;
  url: string;
  user: string;
}
