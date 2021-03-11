import React from 'react';
import styled, { css } from 'styled-components';
import {
  NavLink,
  NavLinkProps,
} from 'react-router-dom';

interface IStyledNavLink extends NavLinkProps{
  readonly disabled: boolean
}

export const StyledLinkx = styled(NavLink)`
  width: fit-content;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.color};
  text-decoration: none;
    
  &[disabled] {
    pointer-events: none;
  }
`;

const linkStyle = css`
  width: fit-content;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.color};
  text-decoration: none;

  &[disabled] {
    pointer-events: none;
    cursor: no-drop;
  }
`;

export const StyledLink = styled(NavLink)`${linkStyle};` as React.FC<IStyledNavLink>;
