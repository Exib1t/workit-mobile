import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';
import {fontVariables} from '../../../assetts/fontVariables.ts';

export const ProjectsScreenStyles = ({theme}: DefaultStylesProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors[`${theme}_bgd_default`],
      padding: 10,
      gap: 24,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: 40,
    },
    headerText: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    title: {
      color: Colors[`${theme}_on_bgd_srf_1`],
      ...fontVariables.title.large,
    },
    titleMarked: {
      color: Colors[`${theme}_primary`],
      ...fontVariables.title.large,
    },
    box: {
      width: '100%',
      display: 'flex',
      padding: 20,
      gap: 16,
      backgroundColor: Colors[`${theme}_bgd_variant`],
    },
    boxText: {
      color: Colors[`${theme}_on_bgd_srf_2`],
      ...fontVariables.title.small,
    },
  });
};
