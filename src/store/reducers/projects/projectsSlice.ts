import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchProjects} from './projectsThunk.ts';
import {ProjectsSliceState} from './projectsSlice.types.ts';
import ApiStatuses from '../../../constants/ApiStatuses.ts';

const initialState: ProjectsSliceState = {
  projects: [],
  selectedProject: null,
  isLoading: ApiStatuses.initialStatus,
  errors: null,
};

const projectsSlice = createSlice({
  name: ' projects',
  initialState,
  reducers: {
    setSelectedProjectId(state, action: PayloadAction<number>) {
      const selectedProject = state.projects.find(
        project => project.id === action.payload,
      );
      state.selectedProject = selectedProject || null;
    },
  },
  extraReducers: builder => {
    // Projects get all
    builder.addCase(fetchProjects.pending, state => {
      state.isLoading = ApiStatuses.requestStatus;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.errors = null;
      state.isLoading = ApiStatuses.successStatus;
    });
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.errors = action.payload;
      state.isLoading = ApiStatuses.failStatus;
    });
  },
});

export default projectsSlice.reducer;
export const {setSelectedProjectId} = projectsSlice.actions;
