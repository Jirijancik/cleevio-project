import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/Icon';
import { ButtonState } from '../../buttonStateEnum';
import { IButtonProps, Button } from '../../Button';

export interface IIconButtonProps extends Omit<IButtonProps, 'text' | 'isLoading'> {
  readonly iconName: string;
  readonly size?: number;
}

const propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  state: PropTypes.oneOf(Object.values(ButtonState)),
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export const IconButton: React.FC<IIconButtonProps> = (props) => {
  const {
    onClick,
    isDisabled,
    state,
    iconName,
    size = 16,
  } = props;

  return (
    <div>
      <Button
        onClick={onClick}
        isDisabled={isDisabled}
        state={state}
        width={48}
      >
        <Icon iconName={iconName} size={size} />
      </Button>
    </div>

  );
};

IconButton.displayName = 'IconButton';
IconButton.propTypes = propTypes;
