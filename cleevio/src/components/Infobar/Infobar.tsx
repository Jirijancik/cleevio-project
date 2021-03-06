/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './components/StyledWrapper';

export interface IInfobarProps {
  readonly text?: string;
  readonly title?: string;
  // readonly onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  // readonly isDisabled?: boolean;
  // readonly isLoading?: boolean;
  // readonly state?: ButtonState;
}

const propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  // onClick: PropTypes.func.isRequired,
  // isDisabled: PropTypes.bool,
  // isLoading: PropTypes.bool,
  // state: PropTypes.oneOf(Object.values(ButtonState)),
};

export const Infobar: React.FC<IInfobarProps> = ({ text, title }) => {
  console.log('ahoj');

  return (

    <StyledWrapper>
      <h1>{title}</h1>
      {text}
    </StyledWrapper>

  );
};

Infobar.displayName = 'Infobar';
Infobar.propTypes = propTypes;
