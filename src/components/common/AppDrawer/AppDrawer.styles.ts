import {StyleSheet} from 'react-native';
import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';
import {Colors} from '../../../assetts/colors.ts';
import {fontVariables} from '../../../assetts/fontVariables.ts';

export const AppDrawerStyles = ({theme}: DefaultStylesProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      paddingVertical: 30,
      backgroundColor: Colors[`${theme}_bgd_default`],
    },
    item: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: Colors[`${theme}_on_bgd_srf_4`],
    },
    itemText: {
      color: Colors[`${theme}_on_bgd_srf_1`],
      ...fontVariables.label.large,
    },
    itemActive: {
      color: Colors[`${theme}_primary`],
    },
  });
