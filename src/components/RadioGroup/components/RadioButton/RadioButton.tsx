/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useRadio } from '@react-aria/radio';
import { RadioGroupState } from '@react-stately/radio';
import { Paper } from 'components/Paper';
import { RadioGroupContext } from '../../radioGroupContext';

export interface IRadioButtonProps {
  readonly text?: string;
  // readonly onClick: (event: MouseEvent) => void;
  readonly isDisabled?: boolean;
  readonly isLoading?: boolean;
  readonly children?: React.ReactNode;
  readonly width?: number;
  readonly label?: string;
  readonly value: string;
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
  value: PropTypes.string.isRequired,
};

export const RadioButton: React.FC<IRadioButtonProps> = (props) => {
  const { children } = props;
  const radioGroupState = React.useContext(RadioGroupContext) as RadioGroupState;
  const ref = React.useRef(null);
  const { inputProps } = useRadio(props, radioGroupState, ref);

  return (
    <Paper>
      <label style={{
        display: 'block', color: 'black', padding: 12, paddingRight: 20, cursor: 'pointer',
      }}
      >
        <input {...inputProps} ref={ref} />
        {children}
      </label>
    </Paper>
  );
};

RadioButton.displayName = 'RadioButton';
RadioButton.propTypes = propTypes;
