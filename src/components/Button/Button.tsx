import React, { useRef, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { useButton } from '@react-aria/button';
import { ThemeProvider } from 'styled-components';
import { Icon } from 'components/Icon';
import { StyledButton } from './components/StyledButton';
import { ButtonState } from './buttonStateEnum';
import { getButtonColor } from './utils/getButtonCollor';

export interface IButtonProps {
  readonly text?: string;
  readonly onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  readonly isDisabled?: boolean;
  readonly isLoading?: boolean;
  readonly state?: ButtonState;
  readonly children?: React.ReactNode;
  readonly width?: number;
  readonly iconName?: string;
}

const propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  state: PropTypes.oneOf(Object.values(ButtonState)),
  width: PropTypes.number,
  iconName: PropTypes.string,
};

export const Button: React.FC<IButtonProps> = (props) => {
  const {
    text,
    isDisabled,
    isLoading,
    state = ButtonState.Default,
    children,
    width = 200,
    iconName,
  } = props;

  const ref = useRef() as React.RefObject<HTMLButtonElement>;
  const { buttonProps } = useButton({
    ...props,
    isDisabled: isDisabled || isLoading,
  }, ref);

  return (
    <ThemeProvider theme={() => getButtonColor(state)}>
      <StyledButton {...buttonProps} isLoading={isLoading} isDisabled={isDisabled} type="button" ref={ref} width={width}>
        {children || text}
        {!!iconName && <Icon iconName={iconName} size={16} />}
      </StyledButton>
    </ThemeProvider>
  );
};

Button.displayName = 'Button';
Button.propTypes = propTypes;
