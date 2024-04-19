import {Dimensions, StyleSheet} from 'react-native';
import {DefaultStylesProps} from '../../../models/styles/styles.models.ts';
import {fontVariables} from '../../../assetts/fontVariables.ts';
import {Colors} from '../../../assetts/colors.ts';

export const ProjectSelectStyles = ({theme}: DefaultStylesProps) => {
  return StyleSheet.create({
    container: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    title: {
      color: Colors[`${theme}_on_bgd_srf_1`],
      ...fontVariables.label.large,
    },
    menu: {
      position: 'absolute',
      top: 35,
      left: -110,
      width: 260,
      display: 'flex',
      padding: 10,
      backgroundColor: Colors[`${theme}_srf_default`],
      zIndex: 5,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.3,
      shadowRadius: 0,
      elevation: 6,
    },
    overlay: {
      position: 'absolute',
      top: -40,
      left: -164,
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
      zIndex: 3,
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
    active: {
      backgroundColor: Colors[`${theme}_state_bgd_srf_container_active`],
    },
  });
};
