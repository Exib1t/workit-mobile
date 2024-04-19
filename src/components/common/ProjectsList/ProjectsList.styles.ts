import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';
import {fontVariables} from '../../../assetts/fontVariables.ts';

export const ProjectsListStyles = ({theme}: DefaultStylesProps) => {
  return StyleSheet.create({
    select: {
      width: '100%',
      height: 290,
      backgroundColor: Colors[`${theme}_srf_default`],
    },
    item: {
      width: '100%',
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: Colors[`${theme}_on_bgd_srf_5`],
    },
    itemText: {
      color: Colors[`${theme}_on_bgd_srf_1`],
      ...fontVariables.body.medium,
    },
    last: {
      borderBottomWidth: 0,
    },
    pressed: {
      backgroundColor: Colors[`${theme}_state_bgd_srf_container_hover`],
    },
  });
};
