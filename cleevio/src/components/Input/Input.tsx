/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useTextField } from '@react-aria/textfield';
import { InputState } from './inputStateEnum';
import { InputType } from './inputTypeEnum';
import { StyledInput } from './components/StyledInput';

export interface IInputProps {
  readonly placeholder?: string;
  readonly label?: string;
  readonly name: string;
  readonly type?: InputType;
//   readonly onClick: (event: MouseEvent<HTMLButtonElement>) => void;
   readonly isDisabled?: boolean;
   readonly isRequired?: boolean;
//   readonly isLoading?: boolean;
   readonly state?: InputState;
   readonly value: string;
}

const propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(InputType)),
  //   onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  //   isLoading: PropTypes.bool,
  state: PropTypes.oneOf(Object.values(InputState)),
};

export const Input: React.FC<IInputProps> = (props) => {
  const {
    label,
    type = InputType.Text,
  } = props;

  const ref = useRef() as React.RefObject<HTMLInputElement>;
  const { labelProps, inputProps } = useTextField({ ...props, type },
    ref);
  console.log(inputProps);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label {...labelProps}>{label}</label>
      <StyledInput ref={ref} />
    </div>
  );
};

Input.displayName = 'Input';
Input.propTypes = propTypes;
