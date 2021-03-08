import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeading } from './components/StyledHeading';

export interface IHeadingProps {
  readonly text?: string;
}

const propTypes = {
  text: PropTypes.string,
};

export const Heading: React.FC<IHeadingProps> = (props) => {
  const {
    text,
  } = props;

  return (

    <StyledHeading>
      {text}
    </StyledHeading>

  );
};

Heading.displayName = 'Button';
Heading.propTypes = propTypes;
