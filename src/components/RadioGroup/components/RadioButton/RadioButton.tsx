/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useRadio } from '@react-aria/radio';
import { RadioGroupState } from '@react-stately/radio';
import { RadioGroupContext } from '../../radioGroupContext';
import { StyledLabel } from './components/StyledLabel';

export interface IRadioButtonProps {
  readonly children?: React.ReactNode;
  readonly isDisabled?: boolean;
  readonly isLoading?: boolean;
  readonly label?: string;
  readonly text?: string;
  readonly value: string;
  readonly width?: number;
}

const propTypes = {
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  label: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string.isRequired,
  width: PropTypes.number,
};

export const RadioButton: React.FC<IRadioButtonProps> = (props) => {
  const { children } = props;

  const radioGroupState = React.useContext(RadioGroupContext) as RadioGroupState;
  const ref = React.useRef(null);
  const { inputProps } = useRadio(props, radioGroupState, ref);

  return (
    <StyledLabel>
      <input {...inputProps} ref={ref} />
      {children}
    </StyledLabel>
  );
};

RadioButton.displayName = 'RadioButton';
RadioButton.propTypes = propTypes;
