import React, {FC} from 'react';
import {View} from 'react-native';
import {PriorityChipsProps} from './PriorityChips.models.ts';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';
import {PriorityChipsStyles} from './PriorityChips.styles.ts';
import TokenIcon, {IconTypes} from '../../control/TokenIcon/TokenIcon.tsx';
import {Colors} from '../../../assetts/colors.ts';

const PriorityChips: FC<PriorityChipsProps> = ({priority}) => {
  const theme = useGetTheme();
  const styles = PriorityChipsStyles({theme, priority});

  const iconType: {[key: string]: IconTypes} = {
    High: 'chevron_up',
    Medium: 'dash',
    Low: 'chevron_down',
  };

  const iconColor = {
    High: Colors[`${theme}_sys_danger`],
    Medium: Colors[`${theme}_sys_informative`],
    Low: Colors[`${theme}_sys_success`],
  };

  return (
    <View style={styles.container}>
      <TokenIcon
        type={iconType[priority]}
        size={12}
        color={iconColor[priority]}
      />
    </View>
  );
};

export default PriorityChips;
