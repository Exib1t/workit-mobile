import {createAsyncThunk} from '@reduxjs/toolkit';
import {IError} from '../../../models/validation/validation.models.ts';
import {IProject} from '../../../models/projects/projects.models.ts';
import ProjectsApi from '../../../services/Api/projects/ProjectsApi.ts';

export const fetchProjects = createAsyncThunk<
  IProject[],
  void,
  {rejectValue: IError}
>('projects/fetchAll', async (_, {rejectWithValue}) => {
  try {
    const response = await ProjectsApi.getAll();

    return response.data;
  } catch (err) {
    return rejectWithValue(err as IError);
  }
});
