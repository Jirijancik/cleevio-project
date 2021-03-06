import React from 'react';
import { select } from '@storybook/addon-knobs';
import { Icon } from './Icon';
import { FlagsName } from '../../constants/FlagsEnum';

export const button = () => {
  const returnIconName = select('Icon Name', FlagsName, FlagsName.Czechia);
  return (
    <>
      <Icon iconName={returnIconName} />
    </>
  );
};

export default {
  title: 'Icon/Icon',
  component: Icon,
};
