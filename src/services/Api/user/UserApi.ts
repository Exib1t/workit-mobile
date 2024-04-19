import api from '../api.ts';
import {
  IUser,
  IUserCreate,
  IUserLogin,
  IUserToken,
} from '../../../models/user/user.models.ts';
import {AxiosResponse} from 'axios';

class UserApi {
  constructor() {}

  login(bodyParams: IUserLogin): Promise<AxiosResponse<IUserToken>> {
    return api.post('auth/login', {isRemember: true, ...bodyParams});
  }

  refresh(): Promise<AxiosResponse<IUser>> {
    return api.get('auth/refresh');
  }

  register(bodyParams: IUserCreate): Promise<AxiosResponse<IUserToken>> {
    return api.post('auth/register', bodyParams);
  }
}

export default new UserApi();
