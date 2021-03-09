import React from 'react';
import { text } from '@storybook/addon-knobs';
import { CustomDatePicker } from './DatePicker';

export const datePicker = () => {
  const returnInputLabel = text('Input Label', 'Label');
  const returnInputPlaceholder = text('Input Placeholder', 'Placeholder');
  return (
    <>
      <CustomDatePicker placeholder={returnInputPlaceholder} label={returnInputLabel} name="DateRange" />
    </>
  );
};

export default {
  title: 'DatePicker/DatePicker',
  component: CustomDatePicker,
};
