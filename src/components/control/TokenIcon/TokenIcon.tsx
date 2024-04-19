import React, {FC} from 'react';
import {iconAssets} from './iconAssets.ts';

export type IconTypes =
  | 'at'
  | 'activate'
  | 'activity'
  | 'alert'
  | 'arrow_left'
  | 'burger_menu'
  | 'check'
  | 'chevron_right'
  | 'chevron_down'
  | 'chevron_double_down'
  | 'chevron_up'
  | 'chevron_double_up'
  | 'dash'
  | 'needs_list'
  | 'column_relaxed'
  | 'team'
  | 'logout';

interface IProps {
  type: IconTypes;
  size: 24 | 20 | 16 | 12;
  color: string;
}

const TokenIcon: FC<IProps> = ({type, size, color}) => {
  const Icon = iconAssets[`${type}_${size}`];

  return <Icon stroke={color} />;
};

export default TokenIcon;
