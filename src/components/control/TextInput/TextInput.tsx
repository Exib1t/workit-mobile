import React, {FC} from 'react';
import {TextInputStyles} from './TextInput.styles.ts';
import {TextInputProps} from './TextInput.models.ts';
import useGetTheme from '../../../helpers/themeHelper.ts';
import {TextInput as Input} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';

const TextInput: FC<TextInputProps> = ({
  disabled,
  value,
  onChange,
  size,
  placeholder,
}) => {
  const theme = useGetTheme();
  const styles = TextInputStyles({theme, disabled: !!disabled, size});

  return (
    <Input
      style={styles.container}
      placeholder={placeholder}
      placeholderTextColor={Colors[`${theme}_on_bgd_srf_3`]}
      value={value}
      onChangeText={onChange}
    />
  );
};

export default TextInput;
