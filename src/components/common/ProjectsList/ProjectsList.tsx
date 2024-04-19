import React, {FC, useState} from 'react';
import {Pressable, ScrollView, Text} from 'react-native';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';
import {IProject} from '../../../models/projects/projects.models.ts';
import {ProjectsListStyles} from './ProjectsList.styles.ts';

interface IProps {
  projects: IProject[];
  onSelect: (selectedProject: IProject) => void;
}

const ProjectsList: FC<IProps> = ({projects, onSelect}) => {
  const theme = useGetTheme();
  const styles = ProjectsListStyles({theme});

  const [pressedId, setPressedId] = useState<number | null>(null);

  const onPressIn = (id: number) => {
    setPressedId(id);
  };

  const onPressOut = () => {
    setPressedId(null);
  };

  return (
    <ScrollView style={styles.select}>
      {projects.map(project => (
        <Pressable
          key={`project-${project.id}`}
          style={[
            styles.item,
            projects.at(-1)?.id === project.id ? styles.last : null,
            pressedId === project.id ? styles.pressed : null,
          ]}
          onPressIn={() => onPressIn(project.id)}
          onPressOut={onPressOut}
          onPress={() => onSelect(project)}>
          <Text style={styles.itemText}>{project.title}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default ProjectsList;
