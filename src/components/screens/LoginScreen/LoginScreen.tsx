import React, {FC, useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import useGetTheme from '../../../helpers/themeHelper.ts';
import {LoginScreenStyles} from './LoginScreen.styles.ts';
import TextInput from '../../control/TextInput/TextInput.tsx';
import {LoginScreenStates} from './LoginScreen.models.ts';
import Button from '../../control/Button/Button.tsx';
import Logo from '../../common/Logo/Logo.tsx';
import {StackScreenProps} from '@react-navigation/stack';
import {RootNavigatorParams} from '../../../models/navigation/navigation.models.ts';
import {ScreenNames} from '../../../navigation/routes.ts';

const LoginScreen: FC<StackScreenProps<RootNavigatorParams>> = ({
  navigation,
}) => {
  const theme = useGetTheme();
  const styles = LoginScreenStyles({theme});

  const [loginData, setLoginData] = useState<LoginScreenStates['loginData']>({
    email: '',
    password: '',
  });

  const isSubmitDisabled = useMemo(() => {
    return !loginData.email.trim() || !loginData.password.trim();
  }, [loginData]);

  const redirectToRegister = () => {
    navigation.navigate(ScreenNames.SIGN_UP);
  };

  const handleChange =
    (type: keyof LoginScreenStates['loginData']) => (value: string) => {
      setLoginData(prevState => ({...prevState, [type]: value}));
    };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.logo}>
          <Logo size={128} />
        </View>
        <Text style={styles.title}>Sign in</Text>
        <View style={styles.inputs}>
          <TextInput
            placeholder={'Email'}
            value={loginData.email}
            onChange={handleChange('email')}
            size={'md'}
          />
          <TextInput
            placeholder={'Password'}
            value={loginData.password}
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
            title={'Create an account ?'}
            type={'text_plain'}
            size={'md'}
            isFullWidth
            onPress={redirectToRegister}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
