import React, { useState } from 'react';
import { text } from '@storybook/addon-knobs';
import { Input } from './Input';

export const input = () => {
  const returnInputLabel = text('Input Label', 'Label');
  const returnInputPlaceholder = text('Input Placeholder', 'Placeholder');
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
  title: `Input/${Input.displayName}`,
  component: Input,
};
