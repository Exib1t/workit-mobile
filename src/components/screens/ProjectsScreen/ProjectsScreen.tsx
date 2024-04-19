import React, {FC, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../store/store.ts';
import {logoutUser} from '../../../store/reducers/user/userThunk.ts';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';
import {ProjectsScreenStyles} from './ProjectsScreen.styles.ts';
import Logo from '../../common/Logo/Logo.tsx';
import Button from '../../control/Button/Button.tsx';
import TokenIcon from '../../control/TokenIcon/TokenIcon.tsx';
import {fetchProjects} from '../../../store/reducers/projects/projectsThunk.ts';
import {IProject} from '../../../models/projects/projects.models.ts';
import {StackScreenProps} from '@react-navigation/stack';
import {RootNavigatorParams} from '../../../models/navigation/navigation.models.ts';
import {ScreenNames} from '../../../navigation/routes.ts';
import ProjectsList from '../../common/ProjectsList/ProjectsList.tsx';
import {Colors} from '../../../assetts/colors.ts';

const ProjectsScreen: FC<StackScreenProps<RootNavigatorParams>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const theme = useGetTheme();
  const styles = ProjectsScreenStyles({theme});

  const userInfo = useAppSelector(state => state.user.userInfo);
  const projects = useAppSelector(state => state.projects.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleSelectProject = (selectedProject: IProject) => {
    navigation.navigate(ScreenNames.ISSUES, {projectId: selectedProject.id});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo size={64} />
        <View style={styles.headerText}>
          <Text style={styles.title}>Hello</Text>
          <Text style={styles.titleMarked}>
            {userInfo?.first_name} {userInfo?.last_name}!
          </Text>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>Please select a project</Text>
        <ProjectsList projects={projects} onSelect={handleSelectProject} />
        <Button
          title={'Logout'}
          type={'text_plain'}
          size={'sm'}
          align={'flex-end'}
          onPress={handleLogout}
          renderIcon={() => (
            <TokenIcon
              type={'logout'}
              size={20}
              color={Colors[`${theme}_secondary`]}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ProjectsScreen;
