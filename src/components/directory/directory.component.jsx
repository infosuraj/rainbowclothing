import DirectoryItem from "../directory-item/directory-item.component";
import {DirectoryContainer} from './directory.styles'
import React from 'react';
import images from "../../assets";

const categories = [
    {
        id: 1,
        title: 'Hats',
        imageSource: images.hats,
        route: 'shop/hats'
    },
    {
        id: 2,
        title: 'Jackets',
        imageSource: images.jackets,
        route: 'shop/jackets'
    },
    {
        id: 3,
        title: 'Sneakers',
        imageSource: images.sneakers,
        route: 'shop/sneakers'
    },
    {
        id: 4,
        title: 'Womens',
        imageSource: images.women,
        route: 'shop/womens'
    },
    {
        id: 5,
        title: 'Mens',
        imageSource: images.men,
        route: 'shop/mens'
    },
];
const Directory = () => {

    return (
        <DirectoryContainer>
            {categories.map(category => (
                <DirectoryItem category={category} key={category.id}/>
            ))}
        </DirectoryContainer>
    );
};

export default Directory;
