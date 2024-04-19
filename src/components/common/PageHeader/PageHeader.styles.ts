import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';
import {fontVariables} from '../../../assetts/fontVariables.ts';

export const PageHeaderStyles = ({theme}: DefaultStylesProps) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    left: {
      display: 'flex',
      flexDirection: 'row',
      gap: 8,
    },
    title: {
      color: Colors[`${theme}_on_bgd_srf_1`],
      ...fontVariables.headline.medium,
    },
  });
};
