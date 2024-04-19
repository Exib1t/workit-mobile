import React, {useRef, useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../../store/store.ts';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';
import {ProjectSelectStyles} from './ProjectSelect.styles.ts';
import TokenIcon from '../TokenIcon/TokenIcon.tsx';
import {IProject} from '../../../models/projects/projects.models.ts';
import {ScreenNames} from '../../../navigation/routes.ts';
import {navigate} from '../../../navigation/service.ts';
import {Colors} from '../../../assetts/colors.ts';

const ProjectSelect = () => {
  const theme = useGetTheme();
  const styles = ProjectSelectStyles({theme});

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [pressedId, setPressedId] = useState<number | null>(null);

  const menuRef = useRef(null);

  const projects = useAppSelector(state => state.projects.projects);
  const selectedProject = useAppSelector(
    state => state.projects.selectedProject,
  );

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    setPressedId(null);
  };

  const onPressIn = (id: number) => {
    setPressedId(id);
  };

  const onPressOut = () => {
    setPressedId(null);
  };

  const handleSelectProject = (project: IProject) => {
    navigate(ScreenNames.ISSUES, {projectId: project.id});
    handleMenuClose();
  };

  return (
    <Pressable style={styles.container} onPress={handleMenuOpen}>
      <Text style={styles.title}>{selectedProject?.title}</Text>
      <TokenIcon
        type={isMenuOpen ? 'chevron_up' : 'chevron_down'}
        color={Colors[`${theme}_secondary`]}
        size={16}
      />

      {isMenuOpen && (
        <View style={styles.menu} ref={menuRef}>
          {projects.map(project => (
            <Pressable
              key={`project-${project.id}`}
              style={[
                styles.item,
                projects.at(-1)?.id === project.id ? styles.last : null,
                selectedProject?.id === project.id ? styles.active : null,
                pressedId === project.id ? styles.pressed : null,
              ]}
              onPressIn={() => onPressIn(project.id)}
              onPressOut={onPressOut}
              onPress={() => handleSelectProject(project)}>
              <Text style={styles.itemText}>{project.title}</Text>
            </Pressable>
          ))}
        </View>
      )}

      {isMenuOpen && (
        <TouchableOpacity style={styles.overlay} onPress={handleMenuClose} />
      )}
    </Pressable>
  );
};

export default ProjectSelect;
