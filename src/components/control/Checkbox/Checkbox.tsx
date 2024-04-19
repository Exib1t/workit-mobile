import React, {FC, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import TokenIcon from '../TokenIcon/TokenIcon.tsx';
import {CheckboxStyles} from './Checkbox.styles.ts';
import {CheckboxProps} from './Checkbox.models.ts';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';
import {Colors} from '../../../assetts/colors.ts';

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
      {checked && (
        <TokenIcon
          type={'check'}
          size={20}
          color={Colors[`${theme}_primary`]}
        />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
