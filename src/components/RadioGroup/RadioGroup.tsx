import React from 'react';
import PropTypes from 'prop-types';
import { useRadioGroup } from '@react-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';
import { RadioGroupContext } from './radioGroupContext';

export interface IRadioGroupProps {
  readonly text?: string;
  // readonly onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  readonly isDisabled?: boolean;
  readonly isLoading?: boolean;
  readonly children?: React.ReactNode;
  readonly width?: number;
  readonly label?: string;
}

const propTypes = {
  text: PropTypes.string,
  // onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  // state: PropTypes.oneOf(Object.values(ButtonState)),
  width: PropTypes.number,
  label: PropTypes.string,
};

export const RadioGroup: React.FC<IRadioGroupProps> = (props) => {
  const {
    // state = ButtonState.Default,
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
