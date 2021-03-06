import styled from 'styled-components';

// interface IStyledButtonProps {
//   // readonly state: ButtonState;
//   // readonly isDisabled?: boolean;
//   // readonly isLoading?: boolean;

// }

export const StyledInput = styled.input`
/* Primary/White */

background: #FFFFFF;
/* Cool Gray 9/10% */

border: 1px solid #F1F1F2;
box-sizing: border-box;
border-radius: 10px;

width: 460px;
padding: 16px 20px;

&::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #D0D0CE;
  opacity: 1; /* Firefox */
}
`;

//   top: ${props => px(getBadgeSpacing(props.buttonSize, props.withValue))};
//   right: ${props => px(getBadgeSpacing(props.buttonSize, props.withValue))};
