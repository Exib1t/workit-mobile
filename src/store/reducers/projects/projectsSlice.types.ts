import {IProject} from '../../../models/projects/projects.models.ts';
import {IError} from '../../../models/validation/validation.models.ts';
import ApiStatuses from '../../../constants/ApiStatuses.ts';

export interface ProjectsSliceState {
  projects: IProject[];
  selectedProject: IProject | null;
  isLoading: typeof ApiStatuses.initialStatus;
  errors: IError | null | undefined;
}
