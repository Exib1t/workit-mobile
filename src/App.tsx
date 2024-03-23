import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigator from './navigation/RootNavigator.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigation/service.ts';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
