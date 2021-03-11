import styled from 'styled-components';
import { StyledInput } from 'components/Input/components/StyledInput';
// interface IStyledButtonProps {
//   // readonly state: ButtonState;
//   // readonly isDisabled?: boolean;
//   // readonly isLoading?: boolean;

// }

export const StyledButton = styled(StyledInput).attrs({ as: 'button' })`
    height: 49px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
`;

//   top: ${props => px(getBadgeSpacing(props.buttonSize, props.withValue))};
//   right: ${props => px(getBadgeSpacing(props.buttonSize, props.withValue))};
