import React, {FC, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import TokenIcon from '../TokenIcon/TokenIcon.tsx';
import useGetTheme from '../../../helpers/themeHelper.ts';
import {CheckboxStyles} from './Checkbox.styles.ts';
import {CheckboxProps} from './Checkbox.models.ts';

const Checkbox: FC<CheckboxProps> = ({checked, onPress, disabled}) => {
  const [isPressed, setIsPressed] = useState(false);

  const theme = useGetTheme();
  const styles = CheckboxStyles({
    theme,
    checked,
    isPressed,
    disabled: !!disabled,
  });

  const handlePress = () => {
    onPress(!checked);
  };

  const onPressIn = () => {
    setIsPressed(true);
  };

  const onPressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handlePress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      {checked && <TokenIcon type={'check'} size={20} />}
    </TouchableOpacity>
  );
};

export default Checkbox;
