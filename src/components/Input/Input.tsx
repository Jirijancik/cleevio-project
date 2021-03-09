/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { InputHTMLAttributes, MouseEvent, useRef } from 'react';
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
  readonly onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  readonly onChange?:(value: string) => void;
   readonly isDisabled?: boolean;
   readonly isRequired?: boolean;
//   readonly isLoading?: boolean;
   readonly state?: InputState;
   readonly value?: string;
   readonly forwardRef?: React.ForwardedRef<HTMLInputElement>
}

const propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.oneOf(Object.values(InputType)),
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  //   isLoading: PropTypes.bool,
  state: PropTypes.oneOf(Object.values(InputState)),
};

export const Input: React.FC<IInputProps> = React.forwardRef<HTMLInputElement, IInputProps>((props, forwardRef) => {
  const {
    label,
    type = InputType.Text,
    onClick,
    value,
  } = props;
  console.log('value', forwardRef, value);
  const inputRef = useRef<HTMLInputElement>(null);
  const { labelProps, inputProps } = useTextField({ ...props, type, inputElementType: 'input' },
  inputRef as React.RefObject<HTMLInputElement>);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label {...labelProps}>{label}</label>
      <StyledInput {...inputProps as InputHTMLAttributes<HTMLInputElement>} ref={inputRef} onClick={onClick} />
    </div>
  );
});

Input.displayName = 'Input';
Input.propTypes = propTypes;
