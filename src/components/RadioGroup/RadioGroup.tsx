import React from 'react';
import PropTypes from 'prop-types';
import { useRadioGroup } from '@react-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { RadioGroupContext } from './radioGroupContext';

export interface IRadioGroupProps {
  readonly children?: React.ReactNode;
  readonly isDisabled?: boolean;
  readonly isLoading?: boolean;
  readonly text?: string;
  readonly label?: string;
  readonly width?: number;
}

const propTypes = {
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  label: PropTypes.string,
  width: PropTypes.number,
};

export const RadioGroup: React.FC<IRadioGroupProps> = (props) => {
  const {
    children,
    label,
  } = props;

  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps } = useRadioGroup(props, state);

  return (
    <div {...radioGroupProps}>
      <div
        {...labelProps}
        style={{ paddingBottom: 20, fontSize: 14, fontWeight: 700 }}
      >
        {label}

      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <RadioGroupContext.Provider value={state}>{children}</RadioGroupContext.Provider>
      </div>
    </div>
  );
};

RadioGroup.displayName = 'RadioGroup';
RadioGroup.propTypes = propTypes;
