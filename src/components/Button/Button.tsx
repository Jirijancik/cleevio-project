/* eslint-disable max-len */
import { FlagsName, IconsName, IconsAndFlagsMap } from 'constants/index';
import React, { MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { useButton } from '@react-aria/button';
import { ThemeProvider } from 'styled-components';
import { Icon } from 'components/Icon';
import { StyledButton } from './components/StyledButton';
import { ButtonState } from './buttonStateEnum';
import { getButtonColor } from './utils/getButtonCollor';
import { ButtonType } from './buttonTypeEnum';

export interface IButtonProps {
  readonly form?: string;
  readonly forwardRef?: React.ForwardedRef<HTMLButtonElement>
  readonly children?: React.ReactNode;
  readonly iconName?: IconsName | FlagsName;
  readonly isDisabled?: boolean;
  readonly isLoading?: boolean;
  readonly onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  readonly state?: ButtonState;
  readonly text?: string;
  readonly type?: ButtonType;
  readonly width?: number;
}

const propTypes = {
  form: PropTypes.string,
  children: PropTypes.node,
  iconName: PropTypes.oneOf([...IconsAndFlagsMap.keys()]),
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  state: PropTypes.oneOf(Object.values(ButtonState)),
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.values(ButtonType)),
  width: PropTypes.number,
};

export const Button: React.FC<IButtonProps> = React.forwardRef<HTMLButtonElement, IButtonProps>((props, forwardRef) => {
  const {
    children,
    iconName,
    isDisabled,
    isLoading,
    state = ButtonState.Default,
    text,
    type = ButtonType.Button,
    width = 200,
  } = props;

  const { buttonProps } = useButton({
    ...props,
    isDisabled: isDisabled || isLoading,
  }, forwardRef as React.RefObject<HTMLButtonElement>);

  return (
    <ThemeProvider theme={() => getButtonColor(state)}>
      <StyledButton
        {...buttonProps}
        ref={forwardRef}
        isLoading={isLoading}
        isDisabled={isDisabled}
        type={type}
        width={width}
      >
        {children || text}
        {!!iconName && <Icon iconName={iconName} size={16} />}
      </StyledButton>
    </ThemeProvider>
  );
});

Button.displayName = 'Button';
Button.propTypes = propTypes;
