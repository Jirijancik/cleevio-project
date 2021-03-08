/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from '../../assets/icons/cleevioLogo.png';
import { Button, ButtonState } from '../Button';
import { Link } from '../Link/Link';
import { StyledWrapper } from './components/StyledWrapper';

export interface IButtonProps {
  // readonly text?: string;
  // readonly onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  // readonly isDisabled?: boolean;
  // readonly isLoading?: boolean;
  // readonly state?: ButtonState;
}

const propTypes = {
  // text: PropTypes.string,
  // onClick: PropTypes.func.isRequired,
  // isDisabled: PropTypes.bool,
  // isLoading: PropTypes.bool,
  // state: PropTypes.oneOf(Object.values(ButtonState)),
};

export const SidebarMenu: React.FC<IButtonProps> = () => {
  console.log('ahoj');

  return (

    <StyledWrapper>
      <img style={{ padding: 40, paddingLeft: 0 }} width="134" height="38" src={logo} alt="Cleevio" />
      <Button onClick={() => console.log('CLICKED')} state={ButtonState.Primary} text="New Trip" width={160} />
      <Link linkPath="/" text="Your Trips" />
      <Link linkPath="/future-feature" text="Future Feature" />
      <Link linkPath="/future-section" text="Future Section" />
    </StyledWrapper>

  );
};

SidebarMenu.displayName = 'SidebarMenu';
SidebarMenu.propTypes = propTypes;
