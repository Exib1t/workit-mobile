import {createSlice} from '@reduxjs/toolkit';
import {IssuesSliceState} from './issuesSlice.types.ts';
import ApiStatuses from '../../../constants/ApiStatuses.ts';
import {fetchIssues} from './issueThunk.ts';

const initialState: IssuesSliceState = {
  issues: [],
  isLoading: ApiStatuses.initialStatus,
  errors: null,
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Issues get all
    builder.addCase(fetchIssues.pending, state => {
      state.isLoading = ApiStatuses.requestStatus;
    });
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      state.issues = action.payload;
      state.errors = null;
      state.isLoading = ApiStatuses.successStatus;
    });
    builder.addCase(fetchIssues.rejected, (state, action) => {
      state.errors = action.payload;
      state.isLoading = ApiStatuses.failStatus;
    });
  },
});

export default issuesSlice.reducer;
