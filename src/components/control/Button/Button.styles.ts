import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {ButtonStylesProps} from './Button.models.ts';
import {fontVariables} from '../../../assetts/fontVariables.ts';

export const ButtonStyles = ({
  theme,
  size,
  type,
  disabled,
  isPressed,
  isFullWidth,
}: ButtonStylesProps) => {
  const backgroundColor = {
    primary: isPressed
      ? Colors[`${theme}_state_primary_press`]
      : Colors[`${theme}_primary`],
    text_plain: isPressed
      ? Colors[`${theme}_state_secondary_container_press`]
      : undefined,
    secondary: isPressed
      ? Colors[`${theme}_state_secondary_press`]
      : Colors[`${theme}_secondary`],
    tertiary: isPressed
      ? Colors[`${theme}_state_secondary_container_press`]
      : undefined,
  };

  const borderColor = {
    primary: Colors[`${theme}_primary`],
    text_plain: 'transparent',
    secondary: Colors[`${theme}_secondary`],
    tertiary: Colors[`${theme}_secondary`],
  };

  const fontColor = {
    primary: Colors[`${theme}_on_bgd_srf_1`],
    text_plain: Colors[`${theme}_secondary`],
    secondary: Colors[`${theme}_on_secondary`],
    tertiary: Colors[`${theme}_secondary`],
  };

  const paddingHorizontal = {
    sm: 12,
    md: 16,
  };

  const paddingVertical = {
    sm: 6,
    md: 8,
  };

  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: isFullWidth ? 'stretch' : 'center',
      gap: 4,
      borderWidth: 1,
      paddingHorizontal: paddingHorizontal[size],
      paddingVertical: paddingVertical[size],
      borderRadius: 2,
      backgroundColor: backgroundColor[type],
      borderColor: borderColor[type],
      opacity: disabled ? 0.5 : 1,
    },
    text: {
      color: fontColor[type],
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 24,
      ...fontVariables.title.medium,
    },
  });
};
