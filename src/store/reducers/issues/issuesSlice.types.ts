import {IIssue} from '../../../models/issues/issues.models.ts';
import ApiStatuses from '../../../constants/ApiStatuses.ts';
import {IError} from '../../../models/validation/validation.models.ts';

export interface IssuesSliceState {
  issues: IIssue[];
  isLoading: typeof ApiStatuses.initialStatus;
  errors: IError | null | undefined;
}
