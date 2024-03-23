import {ScreenNames} from '../../navigation/routes.ts';
import {ParamListBase} from '@react-navigation/native';

export interface RootNavigatorParams extends ParamListBase {
  [ScreenNames.SIGN_IN]: undefined;
  [ScreenNames.SIGN_UP]: undefined;
}
