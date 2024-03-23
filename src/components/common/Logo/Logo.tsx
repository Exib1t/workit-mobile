import React, {FC} from 'react';
import {iconAssets} from '../../control/TokenIcon/iconAssets.ts';

interface IProps {
  size: 24 | 48 | 64 | 128;
}

const Logo: FC<IProps> = ({size}) => {
  const Icon = iconAssets[`logo_${size}`];

  return <Icon />;
};

export default Logo;
