import {IssueStatus} from '../../../models/issues/issues.models.ts';
import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';

export interface StatusChipsProps {
  status: IssueStatus;
}

export interface StatusChipsStyleProps extends DefaultStylesProps {
  status: IssueStatus;
}
