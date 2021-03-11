import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Heading } from './Heading';

export const heading = () => {
  const returnHeadingText = text('Heading text', 'Title');
  return (
    <>
      <Heading text={returnHeadingText} />
    </>
  );
};

export default {
  title: `Heading/${Heading.displayName}`,
  component: Heading,
};
