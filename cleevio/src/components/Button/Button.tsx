import React, { useRef, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { useButton } from '@react-aria/button';
import { ThemeProvider } from 'styled-components';
import { StyledButton } from './components/StyledButton';
import { ButtonState } from './buttonStateEnum';
import { getButtonColor } from './utils/getButtonCollor';

export interface IButtonProps {
  readonly text?: string;
  readonly onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  readonly isDisabled?: boolean;
  readonly isLoading?: boolean;
  readonly state?: ButtonState;
  readonly children?: React.ReactNode
}

const propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  state: PropTypes.oneOf(Object.values(ButtonState)),
};

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    text,
    isDisabled,
    isLoading,
    state = ButtonState.Default,
    children,
  } = props;

  const ref = useRef() as React.RefObject<HTMLButtonElement>;
  const { buttonProps } = useButton({
    ...props,
    isDisabled: isDisabled || isLoading,
  }, ref);

  return (
    <ThemeProvider theme={() => getButtonColor(state)}>
      <StyledButton {...buttonProps} isLoading={isLoading} isDisabled={isDisabled} type="button" ref={ref}>
        {children || text}
      </StyledButton>
    </ThemeProvider>
  );
};

Button.displayName = 'Button';
Button.propTypes = propTypes;
