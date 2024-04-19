import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {StatusChipsStyleProps} from './StatusChips.models.ts';
import {fontVariables} from '../../../assetts/fontVariables.ts';

export const StatusChipsStyles = ({theme, status}: StatusChipsStyleProps) => {
  const fontColor = {
    'In Progress': Colors[`${theme}_sys_informative`],
    'To Estimate': Colors[`${theme}_sys_informative`],
    Done: Colors[`${theme}_sys_success`],
  };

  const bgColor = {
    'In Progress': Colors[`${theme}_notification_info`],
    'To Estimate': Colors[`${theme}_notification_info`],
    Done: Colors[`${theme}_notification_success`],
  };

  return StyleSheet.create({
    container: {
      backgroundColor: bgColor[status],
      paddingHorizontal: 4,
    },
    text: {
      color: fontColor[status],
      ...fontVariables.body.small,
    },
  });
};
