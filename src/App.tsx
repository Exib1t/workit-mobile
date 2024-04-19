import React from 'react';
import {SafeAreaView} from 'react-native';
import RootNavigator from './navigation/RootNavigator.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigation/service.ts';
import {Provider} from 'react-redux';
import {store} from './store/store.ts';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
