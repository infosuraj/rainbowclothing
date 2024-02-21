import styled from "styled-components";

export const DirectoryItemContainer = styled.div`
    min-width: 30%;
    height: 240px; // height for small devices
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000000;
    margin: 0 7.5px 15px;
    overflow: hidden;
    @media (min-width: 576px) and (max-width: 767px) {
        // media query for medium devices
        height: 300px;
    }
    @media (min-width: 768px) {
        // media query for big devices
        height: 43vh;
    }

    @media (max-width: 375px) {
        // media query for big devices
        height: 175px;
    }

    @media (min-width: 576px) and (max-width: 767px) {
        // media query for medium devices
        height: 300px;
    }

    &.large {
        height: 350px;
    }

    &.large {
        height: 380px;
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`;

export const BodyContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #000000;
    background-color: #efecec;
    opacity: 0.7;
    position: absolute;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;

export const Heading2 = styled.h2`
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
`;

export const Para = styled.p`
    font-weight: lighter;
    font-size: 16px;
`;
