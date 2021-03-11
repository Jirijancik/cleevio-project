/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { MouseEvent } from 'react';
import PropTypes from 'prop-types';
import { LinkState } from 'components/Link';
import { Stack } from 'layouts/wrappers/Stack';
import { IconsName } from 'constants/index';
import logo from '../../assets/icons/cleevioLogo.png';
import { Button, ButtonState, IconButton } from '../Button';
import { Link } from '../Link/Link';
import { StyledWrapper } from './components/StyledWrapper';

export interface ISidebarMenuProps {
  readonly onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  readonly handleClose: (event: MouseEvent<HTMLButtonElement>) => void;
  readonly isMobile?: boolean
}

const propTypes = {
  onClick: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
};

export const SidebarMenu: React.FC<ISidebarMenuProps> = ({ onClick, isMobile, handleClose }) => (
  <StyledWrapper>
    <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'center' }}>
      <img style={{ padding: 40, paddingLeft: 0 }} width="134" height="38" src={logo} alt="Cleevio" />
      {isMobile && <IconButton iconName={IconsName.Delete} onClick={handleClose} />}
    </div>
    <Stack spacing={29}>
      <Button onClick={onClick} state={ButtonState.Primary} text="New Trip" width={160} iconName={IconsName.Add} />
      <Stack spacing={20}>
        <Link linkPath="/" text="Your Trips" />
        <Link state={LinkState.Disabled} linkPath="/future-feature" text="Future Feature" />
        <Link state={LinkState.Disabled} linkPath="/future-section" text="Future Section" />
      </Stack>
    </Stack>
  </StyledWrapper>
);

SidebarMenu.displayName = 'SidebarMenu';
SidebarMenu.propTypes = propTypes;
