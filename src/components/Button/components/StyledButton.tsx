import styled from 'styled-components';
import { ButtonState } from '../buttonStateEnum';

interface IStyledButtonProps {
  readonly state: ButtonState;
  readonly isDisabled?: boolean;
  readonly isLoading?: boolean;
  readonly width?: number;
}

export const StyledButton = styled.button<IStyledButtonProps>`

  height: 48px;
  width: ${({ width }) => `${width}px`};
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgroundColor};
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-flow: column;
  &:hover{
    background-color: ${(props) => ((props.isDisabled || props.isLoading) ? 'auto' : props.theme.hoverBackgroundColor)};
  }

`;

//   top: ${props => px(getBadgeSpacing(props.buttonSize, props.withValue))};
//   right: ${props => px(getBadgeSpacing(props.buttonSize, props.withValue))};
