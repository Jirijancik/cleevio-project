import React from 'react';
import { Item } from '@react-stately/collections';
import { text } from '@storybook/addon-knobs';
import { Select } from './SingleSelect';

export const select = () => {
  const returnSignleSelectPlaceholder = text('Single Select placeholder', 'I am a placeholder');
  const returnSignleSelectLabel = text('Single Select label', 'I am a label');
  return (
    <>
      <Select label={returnSignleSelectLabel} placeholder={returnSignleSelectPlaceholder}>
        <Item>Orange</Item>
        <Item>Yellow</Item>
        <Item>Green</Item>
        <Item>Blue</Item>
        <Item>Purple</Item>
      </Select>
    </>
  );
};

export default {
  title: 'Select/Select',
  component: Select,
};
