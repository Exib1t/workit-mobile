import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {StatusChipsProps} from './StatusChips.models.ts';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';
import {StatusChipsStyles} from './StatusChips.styles.ts';

const StatusChips: FC<StatusChipsProps> = ({status}) => {
  const theme = useGetTheme();
  const styles = StatusChipsStyles({theme, status});

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{status}</Text>
    </View>
  );
};

export default StatusChips;
