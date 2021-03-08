import React from 'react';

interface IRadioGroupContext {
  readonly lastFocusedValue: string | null;
  readonly name: string;
  readonly selectedValue: string | null;
}

const defaultContext: IRadioGroupContext = {
  lastFocusedValue: null,
  name: '',
  selectedValue: null,
};

export const RadioGroupContext = React.createContext(defaultContext);
