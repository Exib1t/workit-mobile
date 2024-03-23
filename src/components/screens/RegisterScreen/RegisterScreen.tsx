import React, {FC, useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import useGetTheme from '../../../helpers/themeHelper.ts';
import {RegisterScreenStyles} from './RegisterScreen.styles.ts';
import TextInput from '../../control/TextInput/TextInput.tsx';
import {RegisterScreenStates} from './RegisterScreen.models.ts';
import Button from '../../control/Button/Button.tsx';
import Logo from '../../common/Logo/Logo.tsx';
import {StackScreenProps} from '@react-navigation/stack';
import {RootNavigatorParams} from '../../../models/navigation/navigation.models.ts';
import {ScreenNames} from '../../../navigation/routes.ts';

const RegisterScreen: FC<StackScreenProps<RootNavigatorParams>> = ({
  navigation,
}) => {
  const theme = useGetTheme();
  const styles = RegisterScreenStyles({theme});

  const [registerData, setRegisterData] = useState<
    RegisterScreenStates['registerData']
  >({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const isSubmitDisabled = useMemo(() => {
    return (
      !registerData.email.trim() ||
      !registerData.password.trim() ||
      !registerData.first_name.trim() ||
      !registerData.last_name.trim()
    );
  }, [registerData]);

  const redirectToLogin = () => {
    navigation.navigate(ScreenNames.SIGN_IN);
  };

  const handleChange =
    (type: keyof RegisterScreenStates['registerData']) => (value: string) => {
      setRegisterData(prevState => ({...prevState, [type]: value}));
    };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.logo}>
          <Logo size={128} />
        </View>
        <Text style={styles.title}>Sign up</Text>
        <View style={styles.inputs}>
          <TextInput
            placeholder={'First name'}
            value={registerData.first_name}
            onChange={handleChange('first_name')}
            size={'md'}
          />
          <TextInput
            placeholder={'Last name'}
            value={registerData.last_name}
            onChange={handleChange('last_name')}
            size={'md'}
          />
          <TextInput
            placeholder={'Email'}
            value={registerData.email}
            onChange={handleChange('email')}
            size={'md'}
          />
          <TextInput
            placeholder={'Password'}
            value={registerData.password}
            onChange={handleChange('password')}
            size={'md'}
          />
        </View>
        <View style={styles.buttons}>
          <Button
            title={'Login'}
            type={'primary'}
            size={'md'}
            disabled={isSubmitDisabled}
            isFullWidth
          />
          <Button
            title={'Already have an account?'}
            type={'text_plain'}
            size={'md'}
            isFullWidth
            onPress={redirectToLogin}
          />
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
