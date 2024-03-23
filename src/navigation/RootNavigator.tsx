import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNames} from './routes.ts';
import LoginScreen from '../components/screens/LoginScreen/LoginScreen.tsx';
import Header from '../components/common/Header/Header.tsx';
import {RootNavigatorParams} from '../models/navigation/navigation.models.ts';
import RegisterScreen from '../components/screens/RegisterScreen/RegisterScreen.tsx';

const Stack = createStackNavigator<RootNavigatorParams>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.SIGN_IN}
      screenOptions={{header: props => <Header {...props} />}}>
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
    </Stack.Navigator>
  );
};

export default RootNavigator;
