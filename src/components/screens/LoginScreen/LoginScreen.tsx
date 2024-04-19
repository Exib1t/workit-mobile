import React, {FC, useEffect, useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import {LoginScreenStyles} from './LoginScreen.styles.ts';
import TextInput from '../../control/TextInput/TextInput.tsx';
import {LoginScreenStates} from './LoginScreen.models.ts';
import Button from '../../control/Button/Button.tsx';
import Logo from '../../common/Logo/Logo.tsx';
import {StackScreenProps} from '@react-navigation/stack';
import {RootNavigatorParams} from '../../../models/navigation/navigation.models.ts';
import {ScreenNames} from '../../../navigation/routes.ts';
import {userLoginScheme} from '../../../validators/user/user.validator.ts';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';
import ValidationHelper from '../../../helpers/validation/validation.helper.ts';
import {
  IError,
  IValidationError,
} from '../../../models/validation/validation.models.ts';
import {useAppDispatch, useAppSelector} from '../../../store/store.ts';
import {loginUser} from '../../../store/reducers/user/userThunk.ts';

const LoginScreen: FC<StackScreenProps<RootNavigatorParams>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const theme = useGetTheme();
  const styles = LoginScreenStyles({theme});

  const [loginData, setLoginData] = useState<LoginScreenStates['loginData']>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<IError | null>(null);

  const authErrors = useAppSelector(state => state.user.errors);

  const isSubmitDisabled = useMemo(() => {
    return !loginData.email.trim() || !loginData.password.trim();
  }, [loginData]);

  useEffect(() => {
    if (authErrors) {
      setErrors(ValidationHelper.transformError(authErrors));
    }
  }, [authErrors]);

  const redirectToRegister = () => {
    navigation.navigate(ScreenNames.SIGN_UP);
  };

  const handleChange =
    (type: keyof LoginScreenStates['loginData']) => (value: string) => {
      setLoginData(prevState => ({...prevState, [type]: value}));
      setErrors(null);
    };

  const handleSubmit = () => {
    try {
      userLoginScheme.validateSync(loginData, {abortEarly: false});

      dispatch(loginUser(loginData));
    } catch (err) {
      const error = ValidationHelper.getError(err as IValidationError);
      setErrors(error);
    }
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
            error={errors?.email}
          />
          <TextInput
            placeholder={'Password'}
            value={loginData.password}
            onChange={handleChange('password')}
            size={'md'}
            error={errors?.password}
            secureTextEntry
          />
        </View>
        <View style={styles.buttons}>
          <Button
            title={'Login'}
            type={'primary'}
            size={'md'}
            disabled={isSubmitDisabled}
            isFullWidth
            onPress={handleSubmit}
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
