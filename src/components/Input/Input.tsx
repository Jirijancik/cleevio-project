/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { InputHTMLAttributes, MouseEvent, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTextField } from '@react-aria/textfield';
import { Stack } from 'layouts/wrappers/Stack';
import { InputState } from './inputStateEnum';
import { InputType } from './inputTypeEnum';
import { StyledInput } from './components/StyledInput';

export interface IInputProps {
  readonly forwardRef?: React.ForwardedRef<HTMLInputElement>
  readonly isDisabled?: boolean;
  readonly isRequired?: boolean;
  readonly label?: string;
  readonly name: string;
  readonly onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  readonly onChange?:(value: string) => void;
  readonly placeholder?: string;
  readonly state?: InputState;
  readonly type?: InputType;
  readonly value?: string;
}

const propTypes = {
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  state: PropTypes.oneOf(Object.values(InputState)),
  type: PropTypes.oneOf(Object.values(InputType)),
  value: PropTypes.string,
};

export const Input: React.FC<IInputProps> = (props) => {
  const {
    onClick,
    onChange,
    label,
    placeholder = 'Type here...',
    type = InputType.Text,
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const { labelProps, inputProps } = useTextField({
    ...props, type, inputElementType: 'input', placeholder,
  },
  inputRef as React.RefObject<HTMLInputElement>);

  return (
    <Stack spacing={20}>
      <label {...labelProps}>{label}</label>
      <StyledInput
        {...inputProps as InputHTMLAttributes<HTMLInputElement>}
        ref={inputRef}
        onClick={onClick}
        onChange={onChange as unknown as React.ChangeEventHandler<HTMLInputElement>}
      />
    </Stack>
  );
};

Input.displayName = 'Input';
Input.propTypes = propTypes;
