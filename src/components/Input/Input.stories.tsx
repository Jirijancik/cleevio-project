import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Input } from './Input';

export const input = () => {
  const returnInputValue = text('Input Value', '');
  const returnInputLabel = text('Input Label', 'Label');
  const returnInputPlaceholder = text('Input Placeholder', 'Placeholder');
  // const returnIsDisabled = boolean('Button is diasbled', false);
  // const returnIsLoading = boolean('Button is loading', false);
  // const returnButtonState = select('Button state', Object.values(
  // ButtonState), ButtonState.Primary);
  console.log('ahoj');

  return (
    <>
      <Input
        label={returnInputLabel}
        placeholder={returnInputPlaceholder}
        value={returnInputValue}
        name="Test Input"
      />
    </>
  );
};

export default {
  title: 'Input/Input',
  component: Input,
};
