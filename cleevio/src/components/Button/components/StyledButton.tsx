import styled from 'styled-components';
import { ButtonState } from '../buttonStateEnum';

interface IStyledButtonProps {
  readonly state: ButtonState;
  readonly isDisabled?: boolean;
  readonly isLoading?: boolean;

}

export const StyledButton = styled.button<IStyledButtonProps>`

  height: 48px;
  width: 48px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgroundColor};
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  &:hover{
    background-color: ${(props) => ((props.isDisabled || props.isLoading) ? 'auto' : props.theme.hoverBackgroundColor)};
  }

`;

//   top: ${props => px(getBadgeSpacing(props.buttonSize, props.withValue))};
//   right: ${props => px(getBadgeSpacing(props.buttonSize, props.withValue))};
