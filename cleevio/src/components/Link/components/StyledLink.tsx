import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  /* border: none;
  font-style: normal; */
  width: fit-content;
  font-weight: 600;
  font-size: 16px;
  color: #1C252B;
  text-decoration: none;
`;

//   top: ${props => px(getBadgeSpacing(props.buttonSize, props.withValue))};
//   right: ${props => px(getBadgeSpacing(props.buttonSize, props.withValue))};
