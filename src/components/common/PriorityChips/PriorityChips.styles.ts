import {StyleSheet} from 'react-native';
import {Colors} from '../../../assetts/colors.ts';
import {PriorityChipsStyleProps} from './PriorityChips.models.ts';
import {fontVariables} from '../../../assetts/fontVariables.ts';

export const PriorityChipsStyles = ({
  theme,
  priority,
}: PriorityChipsStyleProps) => {
  const fontColor = {
    High: Colors[`${theme}_sys_danger`],
    Medium: Colors[`${theme}_sys_informative`],
    Low: Colors[`${theme}_sys_success`],
  };

  const bgColor = {
    High: Colors[`${theme}_notification_danger`],
    Medium: Colors[`${theme}_notification_info`],
    Low: Colors[`${theme}_notification_success`],
  };

  return StyleSheet.create({
    container: {
      backgroundColor: bgColor[priority],
      paddingHorizontal: 4,
    },
    text: {
      color: fontColor[priority],
      ...fontVariables.body.small,
    },
  });
};
