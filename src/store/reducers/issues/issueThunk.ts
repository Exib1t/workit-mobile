import {createAsyncThunk} from '@reduxjs/toolkit';
import {IError} from '../../../models/validation/validation.models.ts';
import {IIssue} from '../../../models/issues/issues.models.ts';
import IssuesApi from '../../../services/Api/issues/IssuesApi.ts';
import {setSelectedProjectId} from '../projects/projectsSlice.ts';

export const fetchIssues = createAsyncThunk<
  IIssue[],
  number,
  {rejectValue: IError}
>('issues/fetchAll', async (projectId, {rejectWithValue, dispatch}) => {
  try {
    const response = await IssuesApi.getAll(projectId);

    dispatch(setSelectedProjectId(projectId));

    return response.data;
  } catch (err) {
    return rejectWithValue(err as IError);
  }
});
