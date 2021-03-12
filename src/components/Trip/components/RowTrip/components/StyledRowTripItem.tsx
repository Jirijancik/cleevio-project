import styled from 'styled-components';

export const StyledRowTripItem = styled.div`
padding-right: 20px;
position: relative;
&::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 15px;
    right: 10px;
    top: 2.5px;
    background-color: #E4E4E5;
}
`;
