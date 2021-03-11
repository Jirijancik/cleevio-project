import React from 'react';
import { Item } from '@react-stately/collections';
import { Select } from './SingleSelect';

export const select = () => {
  // const returnSignleSelectCaption = text('Single Select Caption', 'Caption');¨
  console.log('e');
  // const returnIsDisabled = boolean('Button is diasbled', false);
  // const returnIsLoading = boolean('Button is loading', false);
  // const returnButtonState = select('Button state',
  // Object.values(ButtonState), ButtonState.Primary);
  return (
    <>
      <Select label="Favorite Color" placeholder="yo">
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
