import {createAsyncThunk} from '@reduxjs/toolkit';
import UserApi from '../../../services/Api/user/UserApi.ts';
import {
  IUser,
  IUserCreate,
  IUserLogin,
  IUserToken,
} from '../../../models/user/user.models.ts';
import {
  ServerError,
  ServerErrorsModel,
} from '../../../models/validation/validation.models.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginUser = createAsyncThunk<
  IUserToken,
  IUserLogin,
  {rejectValue: ServerError[]}
>('user/login', async (data, {rejectWithValue}) => {
  try {
    const response = await UserApi.login(data);

    await AsyncStorage.setItem('token', response.data.token);

    return response.data;
  } catch (err: any) {
    const error = err.response.data as ServerErrorsModel;
    return rejectWithValue(error.errors);
  }
});

export const registerUser = createAsyncThunk<
  IUserToken,
  IUserCreate,
  {rejectValue: ServerError[]}
>('user/register', async (data, {rejectWithValue}) => {
  try {
    const response = await UserApi.register(data);

    await AsyncStorage.setItem('token', response.data.token);

    return response.data;
  } catch (err: any) {
    const error = err.response.data as ServerErrorsModel;
    return rejectWithValue(error.errors);
  }
});

export const refreshUser = createAsyncThunk<
  IUser,
  void,
  {rejectValue: ServerError[]}
>('user/refresh', async (_, {rejectWithValue}) => {
  try {
    const response = await UserApi.refresh();

    return response.data;
  } catch (err: any) {
    const error = err.response.data as ServerErrorsModel;
    return rejectWithValue(error.errors);
  }
});

export const logoutUser = createAsyncThunk<
  void,
  void,
  {rejectValue: ServerError[]}
>('user/logout', async (_, {rejectWithValue}) => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (err: any) {
    const error = err.response.data as ServerErrorsModel;
    return rejectWithValue(error.errors);
  }
});
