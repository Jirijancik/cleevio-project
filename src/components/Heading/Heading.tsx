import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeading } from './components/StyledHeading';

export interface IHeadingProps {
  readonly text?: string;
  readonly children?: React.ReactNode;
}

const propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

export const Heading: React.FC<IHeadingProps> = (props) => {
  const {
    text,
    children,
  } = props;

  return (

    <StyledHeading>
      {text}
      {children}
    </StyledHeading>

  );
};

Heading.displayName = 'Heading';
Heading.propTypes = propTypes;
