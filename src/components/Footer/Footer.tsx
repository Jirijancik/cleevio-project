import React from 'react';
import PropTypes from 'prop-types';
import { StyledFooter } from './components/StyledFooter';

export interface IFooterProps {
  readonly children?: React.ReactNode;
}

const propTypes = {
  children: PropTypes.node,
};

export const Footer: React.FC<IFooterProps> = (props) => {
  const {
    children,
  } = props;

  return (

    <StyledFooter>
      {children}
    </StyledFooter>

  );
};

Footer.displayName = 'Footer';
Footer.propTypes = propTypes;
