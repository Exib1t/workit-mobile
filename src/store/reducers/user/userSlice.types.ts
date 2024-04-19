import {IUser} from '../../../models/user/user.models.ts';
import {ServerError} from '../../../models/validation/validation.models.ts';
import ApiStatuses from '../../../constants/ApiStatuses.ts';

export interface UserSliceState {
  userInfo: IUser | null;
  token: string | null;
  isLoading: typeof ApiStatuses.initialStatus;
  errors: ServerError[] | null | undefined;
}
