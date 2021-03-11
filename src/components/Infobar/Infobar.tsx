import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'components/Heading';
import { StyledWrapper } from './components/StyledWrapper';

export interface IInfobarProps {
  readonly title?: string;
}

const propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export const Infobar: React.FC<IInfobarProps> = ({ children, title }) => (
  <StyledWrapper>
    <Heading text={title} />
    {children}
  </StyledWrapper>
);

Infobar.displayName = 'Infobar';
Infobar.propTypes = propTypes;
