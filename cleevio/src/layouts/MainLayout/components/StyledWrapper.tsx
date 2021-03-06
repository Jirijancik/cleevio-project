import styled from 'styled-components';

export const StyledWrapper = styled.div`
  min-width: 240px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 240px 240px 320px;
  justify-content: space-between;
  flex-direction: row;
  &:hover{
   
  }

`;

//   top: ${props => px(getBadgeSpacing(props.buttonSize, props.withValue))};
//   right: ${props => px(getBadgeSpacing(props.buttonSize, props.withValue))};
