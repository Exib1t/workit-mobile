import React, {FC, useEffect, useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import {RegisterScreenStyles} from './RegisterScreen.styles.ts';
import TextInput from '../../control/TextInput/TextInput.tsx';
import {RegisterScreenStates} from './RegisterScreen.models.ts';
import Button from '../../control/Button/Button.tsx';
import Logo from '../../common/Logo/Logo.tsx';
import {StackScreenProps} from '@react-navigation/stack';
import {RootNavigatorParams} from '../../../models/navigation/navigation.models.ts';
import {ScreenNames} from '../../../navigation/routes.ts';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';
import {
  IError,
  IValidationError,
} from '../../../models/validation/validation.models.ts';
import {userCreateScheme} from '../../../validators/user/user.validator.ts';
import ValidationHelper from '../../../helpers/validation/validation.helper.ts';
import {registerUser} from '../../../store/reducers/user/userThunk.ts';
import {useAppDispatch, useAppSelector} from '../../../store/store.ts';

const RegisterScreen: FC<
  StackScreenProps<RootNavigatorParams, ScreenNames.SIGN_UP>
> = ({navigation}) => {
  const dispatch = useAppDispatch();
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
  const [errors, setErrors] = useState<IError | null>(null);

  const authErrors = useAppSelector(state => state.user.errors);

  const isSubmitDisabled = useMemo(() => {
    return (
      !registerData.email.trim() ||
      !registerData.password.trim() ||
      !registerData.first_name.trim() ||
      !registerData.last_name.trim()
    );
  }, [registerData]);

  useEffect(() => {
    if (authErrors) {
      setErrors(ValidationHelper.transformError(authErrors));
    }
  }, [authErrors]);

  const redirectToLogin = () => {
    navigation.navigate(ScreenNames.SIGN_IN);
  };

  const handleChange =
    (type: keyof RegisterScreenStates['registerData']) => (value: string) => {
      setRegisterData(prevState => ({...prevState, [type]: value}));
      setErrors(null);
    };

  const handleSubmit = () => {
    try {
      userCreateScheme.validateSync(registerData, {abortEarly: false});

      dispatch(registerUser(registerData));
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
        <Text style={styles.title}>Sign up</Text>
        <View style={styles.inputs}>
          <TextInput
            placeholder={'First name'}
            value={registerData.first_name}
            onChange={handleChange('first_name')}
            size={'md'}
            error={errors?.first_name}
          />
          <TextInput
            placeholder={'Last name'}
            value={registerData.last_name}
            onChange={handleChange('last_name')}
            size={'md'}
            error={errors?.last_name}
          />
          <TextInput
            placeholder={'Email'}
            value={registerData.email}
            onChange={handleChange('email')}
            size={'md'}
            error={errors?.email}
          />
          <TextInput
            placeholder={'Password'}
            value={registerData.password}
            onChange={handleChange('password')}
            size={'md'}
            error={errors?.password}
            secureTextEntry
          />
        </View>
        <View style={styles.buttons}>
          <Button
            title={'Register'}
            type={'primary'}
            size={'md'}
            disabled={isSubmitDisabled}
            isFullWidth
            onPress={handleSubmit}
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
