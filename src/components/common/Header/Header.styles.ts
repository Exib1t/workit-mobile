import {StyleSheet} from 'react-native';
import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';
import {Colors} from '../../../assetts/colors.ts';

export const HeaderStyles = ({theme}: DefaultStylesProps) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 58,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      backgroundColor: Colors[`${theme}_bgd_variant`],
    },
    avatar: {
      width: 36,
      height: 36,
      backgroundColor: Colors[`${theme}_secondary`],
      borderRadius: 100,
    },
  });
