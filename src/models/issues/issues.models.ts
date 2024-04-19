import {CompressedUser} from '../user/user.models.ts';

export interface IIssue {
  id: number;
  link: string;
  title: string;
  description: string;
  status: IssueStatus;
  type: IssueType;
  assignee: CompressedUser;
  priority: IssuePriority;
  createdAt: string;
  updatedAt: string;
  projectId: number;
  reporter: CompressedUser;
  time: IssueTime;
  commentIds: number[];
}

export type IssueStatus = 'Done' | 'To Estimate' | 'In Progress';

export type IssuePriority = 'High' | 'Medium' | 'Low';

export type IssueType = 'Task' | 'Bug' | 'Subtask';

export interface IssueTime {
  estimated: number;
  logged: number;
  remaining: number;
}
