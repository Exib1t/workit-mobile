import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: any, action?: () => any) {
  if (navigationRef.current) {
    if (action) {
      action();
    }
    navigationRef.current.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef.current) {
    navigationRef.current.goBack();
  }
}
