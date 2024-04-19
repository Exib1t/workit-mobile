import {IssuePriority} from '../../../models/issues/issues.models.ts';
import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';

export interface PriorityChipsProps {
  priority: IssuePriority;
}

export interface PriorityChipsStyleProps extends DefaultStylesProps {
  priority: IssuePriority;
}
