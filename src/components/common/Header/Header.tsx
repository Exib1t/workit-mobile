import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import {HeaderStyles} from './Header.styles.ts';
import useGetTheme from '../../../helpers/themeHelper.ts';

const Header: FC<StackHeaderProps> = ({route, navigation, options}) => {
  const theme = useGetTheme();
  const styles = HeaderStyles({theme});

  return (
    <View style={styles.container}>
      <Text>{route.name}</Text>
    </View>
  );
};

export default Header;
