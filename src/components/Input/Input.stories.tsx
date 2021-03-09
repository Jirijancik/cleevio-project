import React, { useState } from 'react';
import { text } from '@storybook/addon-knobs';
import { Input } from './Input';

export const input = () => {
  const returnInputLabel = text('Input Label', 'Label');
  const returnInputPlaceholder = text('Input Placeholder', 'Placeholder');
  // const returnIsDisabled = boolean('Button is diasbled', false);
  // const returnIsLoading = boolean('Button is loading', false);
  // const returnButtonState = select('Button state', Object.values(
  // ButtonState), ButtonState.Primary);
  console.log('ahoj');
  const [value, setValue] = useState('');
  return (
    <>
      <Input
        label={returnInputLabel}
        placeholder={returnInputPlaceholder}
        value={value}
        onChange={setValue}
        name="Test Input"
      />
    </>
  );
};

export default {
  title: 'Input/Input',
  component: Input,
};
