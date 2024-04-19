import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';
import {GestureResponderEvent} from 'react-native';
import {ReactNode} from 'react';

export interface ButtonStylesProps extends DefaultStylesProps {
  type: 'primary' | 'text_plain' | 'secondary' | 'tertiary';
  disabled: boolean;
  size: 'sm' | 'md';
  isPressed: boolean;
  isFullWidth: boolean;
  align: 'center' | 'flex-start' | 'flex-end';
}

export interface ButtonProps {
  title: string;
  type: 'primary' | 'text_plain' | 'secondary' | 'tertiary';
  size: 'sm' | 'md';
  isFullWidth?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  renderIcon?: () => ReactNode;
  align?: 'center' | 'flex-start' | 'flex-end';
}
