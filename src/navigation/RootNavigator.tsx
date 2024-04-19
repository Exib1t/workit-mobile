import React, {useCallback, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNames} from './routes.ts';
import LoginScreen from '../components/screens/LoginScreen/LoginScreen.tsx';
import Header from '../components/common/Header/Header.tsx';
import {RootNavigatorParams} from '../models/navigation/navigation.models.ts';
import RegisterScreen from '../components/screens/RegisterScreen/RegisterScreen.tsx';
import {useAppDispatch, useAppSelector} from '../store/store.ts';
import ProjectsScreen from '../components/screens/ProjectsScreen/ProjectsScreen.tsx';
import {refreshUser} from '../store/reducers/user/userThunk.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToken} from '../store/reducers/user/userSlice.ts';
import IssuesScreen from '../components/screens/IssuesScreen/IssuesScreen.tsx';

const Stack = createStackNavigator<RootNavigatorParams>();

const RootNavigator = () => {
  const dispatch = useAppDispatch();

  const userInfo = useAppSelector(state => state.user.userInfo);
  const token = useAppSelector(state => state.user.token);

  const isAuthenticated = !!userInfo?.id;

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch, token]);

  const getToken = useCallback(async () => {
    const accessToken = await AsyncStorage.getItem('token');

    if (accessToken) {
      dispatch(setToken(accessToken));
    }
  }, [dispatch]);

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.SIGN_IN}
      screenOptions={{header: props => <Header {...props} />}}>
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name={ScreenNames.PROJECTS}
            component={ProjectsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name={ScreenNames.ISSUES} component={IssuesScreen} />
        </>
      ) : (
        <>
          <Stack.Screen
            name={ScreenNames.SIGN_IN}
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.SIGN_UP}
            component={RegisterScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
