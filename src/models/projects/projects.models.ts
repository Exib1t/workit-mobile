import {CompressedUser} from '../user/user.models.ts';

export interface IProject {
  id: number;

  title: string;

  link: string;

  createdAt: string;

  updatedAt: string;

  color: ValidColorsType;

  userIds: number[];

  issueIds: number[];

  postedBy: CompressedUser;
}

export type ValidColorsType =
  | 'pink'
  | 'peach'
  | 'sand'
  | 'lime'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'gray';
