export interface Comment {
  comments: Comment[];
  content: string;
  deleted: boolean;
  id: number;
  level: number;
  time: number;
  time_ago: string;
  user: string;
}
