import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPaper = styled.div`
  padding: 20px;
  background-color: #F9F9FA;
  border-radius: 10px;
  width: fit-content;
`;

export interface IPaperProps {
  readonly text?: string;
  readonly isDisabled?: boolean;
  readonly children?: React.ReactNode;
}

const propTypes = {
  children: PropTypes.node,
};

export const Paper: React.FC<IPaperProps> = (props) => {
  const {
    children,
  } = props;

  return (
    <StyledPaper>
      {children}
    </StyledPaper>
  );
};

Paper.displayName = 'Paper';
Paper.propTypes = propTypes;
