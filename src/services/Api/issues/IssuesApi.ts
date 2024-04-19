import api from '../api.ts';
import {AxiosResponse} from 'axios';
import {IIssue} from '../../../models/issues/issues.models.ts';

class IssuesApi {
  constructor() {}

  getAll(projectId: number): Promise<AxiosResponse<IIssue[]>> {
    return api.get(`issues/getByProjectId/${projectId}`);
  }
}

export default new IssuesApi();
