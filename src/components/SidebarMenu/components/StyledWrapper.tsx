import styled from 'styled-components';

export const StyledWrapper = styled.div`
  min-width: 240px;
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #F9F9FA;
  padding-left: 40px;
  box-sizing: border-box;  

  @media only screen and (max-width: 1050px) {
  & {
    position: absolute;
    min-width: 100vw;
    height: 100vh;
    align-items: center;
    z-index: 9999999999;
  }
}
`;
