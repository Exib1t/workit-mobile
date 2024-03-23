import {StyleSheet} from 'react-native';
import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';
import {Colors} from '../../../assetts/colors.ts';

export const HeaderStyles = ({theme}: DefaultStylesProps) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 58,
      display: 'flex',
      backgroundColor: Colors[`${theme}_bgd_variant`],
    },
  });
