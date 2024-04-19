import React, {FC} from 'react';
import {Text, View} from 'react-native';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';
import {PageHeaderStyles} from './PageHeader.styles.ts';
import {PageHeaderProps} from './PageHeader.models.ts';

const PageHeader: FC<PageHeaderProps> = ({title}) => {
  const theme = useGetTheme();
  const styles = PageHeaderStyles({theme});

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default PageHeader;
