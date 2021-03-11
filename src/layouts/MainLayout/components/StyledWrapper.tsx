import styled from 'styled-components';

export const StyledWrapper = styled.div`
  min-width: 240px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 240px calc(100% - 560px) 320px;
  justify-content: space-between;
  flex-direction: row;
`;
