import styled from "styled-components";

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 1100px;
    justify-content: space-between;
    margin: 10vh auto;
    @media (max-width: 450px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 10vh 5%;
        flex-direction: column;
    }

    @media (max-width: 1000px) {
        padding-left: 2px;
    }
`;

export const HorizontalRow = styled.hr`
    color: #3D3B40;
`;
