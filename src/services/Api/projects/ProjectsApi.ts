import api from '../api.ts';
import {AxiosResponse} from 'axios';
import {IProject} from '../../../models/projects/projects.models.ts';

class ProjectsApi {
  constructor() {}

  getAll(): Promise<AxiosResponse<IProject[]>> {
    return api.get('projects');
  }
}

export default new ProjectsApi();
