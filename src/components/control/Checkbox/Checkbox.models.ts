import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';

export interface CheckboxProps {
  checked: boolean;
  onPress: (value: boolean) => void;
  disabled?: boolean;
}

export interface CheckboxStylesProps extends DefaultStylesProps {
  checked: boolean;
  disabled: boolean;
  isPressed: boolean;
}
