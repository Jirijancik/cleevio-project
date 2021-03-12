import styled from 'styled-components';

export const StyledInnerHeader = styled.h3`
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
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
