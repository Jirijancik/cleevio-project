import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

interface IStyledPaperProps extends Pick<IPaperProps, 'spacing'> {

}

const StyledPaper = styled.div<IStyledPaperProps>`
  padding: ${({ spacing }) => `${spacing}px` ?? 0};
  background-color: #F9F9FA;
  border-radius: 10px;
  width: fit-content;
`;

export interface IPaperProps {
  readonly text?: string;
  readonly isDisabled?: boolean;
  readonly children?: React.ReactNode;
  readonly spacing?: number;
}

const propTypes = {
  children: PropTypes.node,
  spacing: PropTypes.number,
};

export const Paper: React.FC<IPaperProps> = (props) => {
  const {
    children,
    spacing,
  } = props;

  return (
    <StyledPaper spacing={spacing}>
      {children}
    </StyledPaper>
  );
};

Paper.displayName = 'Paper';
Paper.propTypes = propTypes;
