import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {TextInputStylesProps} from './TextInput.models.ts';
import {fontVariables} from '../../../assetts/fontVariables.ts';

export const TextInputStyles = ({
  theme,
  disabled,
  size,
  error,
}: TextInputStylesProps) => {
  const height = {
    sm: 34,
    md: 46,
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

  const fontError = {
    sm: fontVariables.label.small,
    md: fontVariables.label.medium,
  };

  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    },
    input: {
      width: '100%',
      height: height[size],
      display: 'flex',
      alignItems: 'center',
      backgroundColor: Colors[`${theme}_srf_default`],
      color: Colors[`${theme}_on_bgd_srf_1`],
      opacity: disabled ? 0.5 : 1,
      paddingHorizontal: paddingHorizontal[size],
      paddingVertical: paddingVertical[size],
      borderWidth: 1,
      borderRadius: 2,
      borderColor: error
        ? Colors[`${theme}_sys_danger`]
        : Colors[`${theme}_srf_default`],
      ...font[size],
    },
    error: {
      color: Colors[`${theme}_sys_danger`],
      ...fontError[size],
    },
  });
};
