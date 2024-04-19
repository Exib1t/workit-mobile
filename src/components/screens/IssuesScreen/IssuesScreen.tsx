import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';
import {IssueScreenStyles} from './IssueScreen.styles.ts';
import {StackScreenProps} from '@react-navigation/stack';
import {RootNavigatorParams} from '../../../models/navigation/navigation.models.ts';
import {ScreenNames} from '../../../navigation/routes.ts';
import {useAppDispatch, useAppSelector} from '../../../store/store.ts';
import {fetchIssues} from '../../../store/reducers/issues/issueThunk.ts';
import IssueSnippet from '../../common/IssueSnippet/IssueSnippet.tsx';
import PageHeader from '../../common/PageHeader/PageHeader.tsx';
import AppDrawer from '../../common/AppDrawer/AppDrawer.tsx';

const IssuesScreen: FC<
  StackScreenProps<RootNavigatorParams, ScreenNames.ISSUES>
> = ({route}) => {
  const dispatch = useAppDispatch();
  const theme = useGetTheme();
  const styles = IssueScreenStyles({theme});

  const issues = useAppSelector(state => state.issues.issues);

  const selectedProjectId = route.params.projectId;

  useEffect(() => {
    if (selectedProjectId) {
      dispatch(fetchIssues(selectedProjectId));
    }
  }, [dispatch, selectedProjectId]);

  return (
    <AppDrawer>
      <View style={styles.container}>
        <PageHeader title={'Issues'} />
        <View style={styles.list}>
          {issues.map(issue => (
            <IssueSnippet key={`issue-${issue.id}`} issue={issue} />
          ))}
        </View>
      </View>
    </AppDrawer>
  );
};

export default IssuesScreen;
