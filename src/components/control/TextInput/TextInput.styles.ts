import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {TextInputStylesProps} from './TextInput.models.ts';
import {fontVariables} from '../../../assetts/fontVariables.ts';

export const TextInputStyles = ({
  theme,
  disabled,
  size,
}: TextInputStylesProps) => {
  const height = {
    sm: 36,
    md: 48,
  };

  const paddingHorizontal = {
    sm: 8,
    md: 12,
  };

  const paddingVertical = {
    sm: 6,
    md: 12,
  };

  const font = {
    sm: fontVariables.body.medium,
    md: fontVariables.body.large,
  };

  return StyleSheet.create({
    container: {
      width: '100%',
      height: height[size],
      display: 'flex',
      alignItems: 'center',
      backgroundColor: Colors[`${theme}_srf_default`],
      color: Colors[`${theme}_on_bgd_srf_1`],
      opacity: disabled ? 0.5 : 1,
      paddingHorizontal: paddingHorizontal[size],
      paddingVertical: paddingVertical[size],
      ...font[size],
    },
  });
};
