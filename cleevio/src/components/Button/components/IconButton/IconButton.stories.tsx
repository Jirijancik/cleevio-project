import React from 'react';
import { select } from '@storybook/addon-knobs';
import { IconButton } from './IconButton';
import { IconsName } from '../../../../constants/IconsEnum';

export const button = () => {
  const returnIconName = select('Icon Name', IconsName, IconsName.Add);
  console.log('aa');
  return (
    <>
      <IconButton iconName={returnIconName} onClick={() => null} />
    </>
  );
};

export default {
  title: 'Button/IconButton',
  component: IconButton,
};
