/* eslint-disable max-len */
import { FlagsName, IconsName, IconsAndFlagsMap } from 'constants/index';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/Icon';
import { ButtonState } from '../../buttonStateEnum';
import { IButtonProps, Button } from '../../Button';

export interface IIconButtonProps extends Omit<IButtonProps, 'text' | 'isLoading'> {
  readonly iconName: IconsName | FlagsName;
  readonly size?: number;
}

const propTypes = {
  iconName: PropTypes.oneOf([...IconsAndFlagsMap.keys()]).isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.number,
  state: PropTypes.oneOf(Object.values(ButtonState)),
};

export const IconButton: React.FC<IIconButtonProps> = (props) => {
  const {
    iconName,
    isDisabled,
    onClick,
    size = 16,
    state,
  } = props;

  return (
    <Button
      onClick={onClick}
      isDisabled={isDisabled}
      state={state}
      width={48}
    >
      <Icon iconName={iconName} size={size} />
    </Button>
  );
};

IconButton.displayName = 'IconButton';
IconButton.propTypes = propTypes;
