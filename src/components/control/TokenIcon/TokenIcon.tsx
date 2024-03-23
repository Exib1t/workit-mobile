import React, {FC} from 'react';
import {iconAssets} from './iconAssets.ts';

interface IProps {
  type: 'at' | 'activate' | 'activity' | 'alert' | 'arrow_left' | 'check';
  size: 24 | 20 | 16 | 12;
}

const TokenIcon: FC<IProps> = ({type, size}) => {
  const Icon = iconAssets[`${type}_${size}`];

  return <Icon />;
};

export default TokenIcon;
