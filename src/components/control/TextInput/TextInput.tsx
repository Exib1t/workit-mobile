import React, {FC} from 'react';
import {TextInputStyles} from './TextInput.styles.ts';
import {TextInputProps} from './TextInput.models.ts';
import {Text, TextInput as Input, View} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';

const TextInput: FC<TextInputProps> = ({
  disabled,
  value,
  onChange,
  size,
  placeholder,
  error,
  secureTextEntry,
}) => {
  const theme = useGetTheme();
  const styles = TextInputStyles({
    theme,
    disabled: !!disabled,
    size,
    error: !!error,
  });

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors[`${theme}_on_bgd_srf_3`]}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChange}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default TextInput;
