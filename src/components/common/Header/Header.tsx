import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';
import {HeaderStyles} from './Header.styles.ts';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';
import TokenIcon from '../../control/TokenIcon/TokenIcon.tsx';
import ProjectSelect from '../../control/ProjectSelect/ProjectSelect.tsx';
import {Colors} from '../../../assetts/colors.ts';
import {useAppSelector} from '../../../store/store.ts';

const Header: FC<StackHeaderProps> = () => {
  const theme = useGetTheme();
  const styles = HeaderStyles({theme});

  const drawerRef = useAppSelector(state => state.drawer.drawerRef);

  const handleOpenDrawer = () => {
    drawerRef?.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleOpenDrawer}>
        <TokenIcon
          type={'burger_menu'}
          size={12}
          color={Colors[`${theme}_secondary`]}
        />
      </Pressable>
      <ProjectSelect />
      <View style={styles.avatar} />
    </View>
  );
};

export default Header;
