import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './components/StyledWrapper';
import { StyledContent } from './components/StyledContent';
import { Infobar } from '../../components/Infobar/Infobar';
import { SidebarMenu } from '../../components/SidebarMenu/SidebarMenu';

export interface IMainPageLayoutProps {
   readonly infobarText?: string;
   readonly infobarTitle?: string;
  // readonly onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  // readonly isDisabled?: boolean;
  // readonly isLoading?: boolean;
  // readonly state?: ButtonState;
  readonly children: React.ReactNode
}

const propTypes = {
  infobarText: PropTypes.string,
  infobarTitle: PropTypes.string,
  // onClick: PropTypes.func.isRequired,
  // isDisabled: PropTypes.bool,
  // isLoading: PropTypes.bool,
  // state: PropTypes.oneOf(Object.values(ButtonState)),
  children: PropTypes.node,
};

export const MainPageLayout: React.FC<IMainPageLayoutProps> = (props) => {
  const { children, infobarText, infobarTitle } = props;

  return (
    <StyledWrapper>
      <SidebarMenu />
      <StyledContent>
        {children}
      </StyledContent>
      <Infobar text={infobarText} title={infobarTitle} />
    </StyledWrapper>
  );
};

MainPageLayout.displayName = 'SidebarMenu';
MainPageLayout.propTypes = propTypes;
