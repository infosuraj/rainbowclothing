import {PriceContainer, NameContainer, FooterContainer, ImageContainer, ProductCardContainer} from './product-card.styles'

import React,{useContext} from 'react';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {CartContext} from "../../contexts/cart.context";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)

    return (
        <ProductCardContainer>
            <ImageContainer src={imageUrl} alt={`${name}`} width={300} height={300}/>
            <FooterContainer>
                <NameContainer>
                    {name}
                </NameContainer>
                <PriceContainer>
                    {price}
                </PriceContainer>
            </FooterContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    );
};

export default ProductCard;
