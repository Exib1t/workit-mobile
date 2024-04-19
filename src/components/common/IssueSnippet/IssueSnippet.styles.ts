import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';
import {fontVariables} from '../../../assetts/fontVariables.ts';

export const IssueSnippetStyles = ({theme}: DefaultStylesProps) => {
  return StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: Colors[`${theme}_srf_default`],
    },
    column: {
      display: 'flex',
      gap: 8,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    head: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    link: {
      color: Colors[`${theme}_on_bgd_srf_1`],
      ...fontVariables.label.medium,
    },
    title: {
      color: Colors[`${theme}_on_bgd_srf_3`],
      ...fontVariables.body.small,
    },
    avatar: {
      width: 36,
      height: 36,
      backgroundColor: Colors[`${theme}_secondary`],
      borderRadius: 100,
    },
  });
};
