export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserCreate {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface IUserToken {
  token: string;
}

export interface CompressedUser {
  id: number;
  first_name: string;
  last_name: string;
}
