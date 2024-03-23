import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {CheckboxStylesProps} from './Checkbox.models.ts';

export const CheckboxStyles = ({
  theme,
  checked,
  disabled,
  isPressed,
}: CheckboxStylesProps) => {
  return StyleSheet.create({
    container: {
      width: 20,
      height: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      backgroundColor: checked
        ? Colors[`${theme}_primary`]
        : isPressed
        ? Colors[`${theme}_state_secondary_container_press`]
        : 'transparent',
      borderColor: checked
        ? Colors[`${theme}_primary`]
        : Colors[`${theme}_secondary`],
      opacity: disabled ? 0.5 : 1,
    },
  });
};
