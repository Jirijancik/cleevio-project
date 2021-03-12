import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'components/Heading';
import { useHistory } from 'react-router-dom';
import { Footer } from 'components/Footer';
import { useViewport } from 'utils/useVieport';
import { IconButton } from 'components/Button';
import { IconsName } from 'constants/index';
import { StyledWrapper } from './components/StyledWrapper';
import { StyledContent } from './components/StyledContent';
import { Infobar } from '../../components/Infobar/Infobar';
import { SidebarMenu } from '../../components/SidebarMenu/SidebarMenu';
import { StyledContentMobile } from './components/StyledContentMobile';

export interface IMainPageLayoutProps {
  readonly children: React.ReactNode
  readonly footerContent?: React.ReactNode;
  readonly hedingTitle?: string;
  readonly infobarContent?: React.ReactNode;
  readonly infobarTitle?: string;
}

const propTypes = {
  children: PropTypes.node,
  footerContent: PropTypes.node,
  hedingTitle: PropTypes.string,
  infobarContent: PropTypes.node,
  infobarTitle: PropTypes.string,
};

export const MainPageLayout: React.FC<IMainPageLayoutProps> = (props) => {
  const {
    children,
    infobarContent,
    infobarTitle,
    hedingTitle,
    footerContent,
  } = props;
  const history = useHistory();
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const { width } = useViewport();
  const breakpoint = 1050;

  return (
    width > breakpoint
      ? (
        <StyledWrapper>
          <SidebarMenu handleClose={() => null} onClick={() => history.push('/new-trip')} />
          <StyledContent>
            <Heading text={hedingTitle} />
            {children}
            {!!footerContent && (
            <Footer>
              {footerContent}
            </Footer>
            )}
          </StyledContent>
          <Infobar title={infobarTitle}>{infobarContent}</Infobar>
        </StyledWrapper>
      )
      : (
        <>
          {menuIsVisible && <SidebarMenu isMobile handleClose={() => setMenuIsVisible(false)} onClick={() => history.push('/new-trip')} />}
          <StyledContentMobile>
            <Heading text={hedingTitle}>
              <IconButton onClick={() => setMenuIsVisible(true)} iconName={IconsName.Star} />
            </Heading>
            {children}
            {!!footerContent && (
            <Footer>
              {footerContent}
            </Footer>
            )}
          </StyledContentMobile>
        </>
      )
  );
};

MainPageLayout.displayName = 'MainLayout';
MainPageLayout.propTypes = propTypes;
