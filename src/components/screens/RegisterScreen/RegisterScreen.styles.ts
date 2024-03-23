import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';
import {fontVariables} from '../../../assetts/fontVariables.ts';

export const RegisterScreenStyles = ({theme}: DefaultStylesProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: Colors[`${theme}_bgd_default`],
      padding: 10,
      paddingTop: 168,
    },
    inner: {
      display: 'flex',
      position: 'relative',
      gap: 30,
    },
    title: {
      color: Colors[`${theme}_on_bgd_srf_1`],
      textAlign: 'center',
      ...fontVariables.title.large,
    },
    inputs: {
      display: 'flex',
      gap: 16,
    },
    buttons: {
      display: 'flex',
      gap: 20,
    },
    logo: {
      alignSelf: 'center',
      position: 'absolute',
      left: '50%',
      top: -128 - 40,
      transform: [{translateX: -64}],
    },
  });
};
