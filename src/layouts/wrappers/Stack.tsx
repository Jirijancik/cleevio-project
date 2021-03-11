import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Alignment } from './Alignment';

export interface IStackProps {
  readonly align?: Alignment;
  readonly spacing?: number;
}

const propTypes = {
  align: PropTypes.oneOf(Object.values(Alignment)),
  spacing: PropTypes.number,
  children: PropTypes.node,
};

const StyledStack = styled.div<IStackProps>`
  align-items: ${({ align }) => align};
  display: flex;
  flex-direction: column;
  gap: ${({ spacing }) => `${spacing}px`};
`;

export const Stack: React.FC<IStackProps> = ({ align, spacing = 0, children }) => (
  <StyledStack
    align={align}
    spacing={spacing}
  >
    {children}
  </StyledStack>
);

Stack.displayName = 'Stack';
Stack.propTypes = propTypes;
