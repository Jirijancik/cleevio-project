import React from 'react';
import { Item } from '@react-stately/collections';
import { Icon } from 'components/Icon';
import { FlagsName } from 'constants/FlagsEnum';
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
      <Select label="Favorite Color">
        <Item>
          <Icon iconName={FlagsName.Czechia} />
          AHoj
        </Item>
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
