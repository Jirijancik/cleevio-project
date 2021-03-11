import React from 'react';
import { text } from '@storybook/addon-knobs';
import { RadioGroup } from './RadioGroup';
import { RadioButton } from './components/RadioButton/RadioButton';

export const radioGroup = () => {
  const returnRadioGroupLabel = text('Radio Group label', 'This is a label');
  const returnRadioButtonText = text('Radio Button text', 'Random text');
  return (
    <>
      <RadioGroup label={returnRadioGroupLabel}>
        <RadioButton value="Yes">{returnRadioButtonText}</RadioButton>
        <RadioButton value="No">Neeo</RadioButton>
      </RadioGroup>
    </>
  );
};

export default {
  title: `RadioGroup/${RadioGroup.displayName}`,
  component: RadioGroup,
};
