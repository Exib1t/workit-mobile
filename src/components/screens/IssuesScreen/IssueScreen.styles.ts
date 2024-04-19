import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';

export const IssueScreenStyles = ({theme}: DefaultStylesProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      backgroundColor: Colors[`${theme}_bgd_default`],
    },
    list: {
      display: 'flex',
      alignItems: 'center',
      padding: 10,
      gap: 10,
    },
  });
};
