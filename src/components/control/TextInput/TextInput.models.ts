import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  size: 'sm' | 'md';
  placeholder?: string;
}

export interface TextInputStylesProps extends DefaultStylesProps {
  disabled: boolean;
  size: 'sm' | 'md';
}
