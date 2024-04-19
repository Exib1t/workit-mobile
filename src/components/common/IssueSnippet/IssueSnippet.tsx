import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import {IssueSnippetProps} from './IssueSnippet.models.ts';
import useGetTheme from '../../../helpers/theme/themeHelper.ts';
import {IssueSnippetStyles} from './IssueSnippet.styles.ts';
import StatusChips from '../StatusChips/StatusChips.tsx';
import PriorityChips from '../PriorityChips/PriorityChips.tsx';
import TokenIcon from '../../control/TokenIcon/TokenIcon.tsx';
import {Colors} from '../../../assetts/colors.ts';

const IssueSnippet: FC<IssueSnippetProps> = ({issue}) => {
  const theme = useGetTheme();
  const styles = IssueSnippetStyles({theme});

  return (
    <Pressable style={styles.container}>
      <View style={styles.row}>
        <View style={styles.avatar} />
        <View style={styles.column}>
          <View style={styles.head}>
            <Text style={styles.link}>{issue.link}</Text>
            <PriorityChips priority={issue.priority} />
            <StatusChips status={issue.status} />
          </View>
          <View style={styles.head}>
            <Text style={styles.title}>{issue.title}</Text>
          </View>
        </View>
      </View>
      <TokenIcon
        type={'chevron_right'}
        size={24}
        color={Colors[`${theme}_on_bgd_srf_3`]}
      />
    </Pressable>
  );
};

export default IssueSnippet;
