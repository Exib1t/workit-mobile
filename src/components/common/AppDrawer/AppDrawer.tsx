import React, {FC, ReactNode, useEffect, useMemo, useRef} from 'react';
import {Text, View} from 'react-native';
import {DrawerLayout} from 'react-native-gesture-handler';
import {useAppDispatch} from '../../../store/store.ts';
import {setDrawerRef} from '../../../store/reducers/drawer/drawerSlice.ts';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';
import {AppDrawerStyles} from './AppDrawer.styles.ts';
import TokenIcon from '../../control/TokenIcon/TokenIcon.tsx';
import {Colors} from '../../../assetts/colors.ts';
import {navigationRef} from '../../../navigation/service.ts';
import {ScreenNames} from '../../../navigation/routes.ts';

interface IProps {
  children: ReactNode;
}

const AppDrawer: FC<IProps> = ({children}) => {
  const dispatch = useAppDispatch();
  const theme = useGetTheme();
  const styles = AppDrawerStyles({theme});

  const drawer = useRef<DrawerLayout>(null);

  const activeModule = useMemo(() => {
    return navigationRef.current?.getCurrentRoute()?.name;
  }, []);

  console.log(activeModule);

  useEffect(() => {
    if (drawer?.current) {
      dispatch(setDrawerRef(drawer.current));
    }
  }, [dispatch, drawer]);

  const navigationView = () => (
    <View style={styles.container}>
      <View style={styles.item}>
        <TokenIcon
          type={'needs_list'}
          size={24}
          color={
            activeModule === ScreenNames.ISSUES
              ? Colors[`${theme}_primary`]
              : Colors[`${theme}_on_bgd_srf_1`]
          }
        />
        <Text
          style={[
            styles.itemText,
            activeModule === ScreenNames.ISSUES && styles.itemActive,
          ]}>
          Issues
        </Text>
      </View>
      <View style={styles.item}>
        <TokenIcon
          type={'column_relaxed'}
          size={24}
          color={
            activeModule === ScreenNames.BACKLOG
              ? Colors[`${theme}_primary`]
              : Colors[`${theme}_on_bgd_srf_1`]
          }
        />
        <Text
          style={[
            styles.itemText,
            activeModule === ScreenNames.BACKLOG && styles.itemActive,
          ]}>
          Backlog
        </Text>
      </View>
      <View style={styles.item}>
        <TokenIcon
          type={'team'}
          size={24}
          color={
            activeModule === ScreenNames.TEAM
              ? Colors[`${theme}_primary`]
              : Colors[`${theme}_on_bgd_srf_1`]
          }
        />
        <Text
          style={[
            styles.itemText,
            activeModule === ScreenNames.TEAM && styles.itemActive,
          ]}>
          Team
        </Text>
      </View>
    </View>
  );

  return (
    <DrawerLayout
      ref={drawer}
      drawerWidth={350}
      drawerPosition={'left'}
      renderNavigationView={navigationView}
      drawerType={'front'}>
      {children}
    </DrawerLayout>
  );
};

export default AppDrawer;
