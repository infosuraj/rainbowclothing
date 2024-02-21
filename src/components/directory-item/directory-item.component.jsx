import {DirectoryItemContainer, BackgroundImage, BodyContainer, Heading2, Para} from './directory-item.styles';
import React from "react";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
    const { imageSource, title, route } = category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage style={{
                backgroundImage: `url(${imageSource})`
            }}/>
            <BodyContainer>
                <Heading2>{title}</Heading2>
                <Para>Shop Now</Para>
            </BodyContainer>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
