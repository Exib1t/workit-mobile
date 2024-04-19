import React, {FC, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './Button.models.ts';
import {ButtonStyles} from './Button.styles.ts';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';

const Button: FC<ButtonProps> = ({
  title,
  onPress,
  isFullWidth,
  type,
  size,
  disabled,
  renderIcon,
  align = 'center',
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const theme = useGetTheme();
  const styles = ButtonStyles({
    type,
    size,
    disabled: !!disabled,
    theme,
    isPressed,
    isFullWidth: !!isFullWidth,
    align,
  });

  const onPressIn = () => {
    setIsPressed(true);
  };

  const onPressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={styles.container}>
      {renderIcon && renderIcon()}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
