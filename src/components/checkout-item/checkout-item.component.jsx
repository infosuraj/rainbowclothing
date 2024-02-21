import {CheckoutItemContainer, ImageContainer, ImageComponent, NameContainer, QuantityContainer, ArrowContainer, PriceContainer, ValueContainer, RemoveButton} from './checkout-item.styles'

import React,{useContext} from 'react';
import {CartContext} from "../../contexts/cart.context";

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const {deleteItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext)

    const deleteItemHandler = () => deleteItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <ImageComponent src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <NameContainer>{name}</NameContainer>
            <QuantityContainer>
                <ArrowContainer onClick={removeItemHandler}>
                    &#10094;
                </ArrowContainer>
                <ValueContainer>{quantity}</ValueContainer>
                <ArrowContainer onClick={addItemHandler}>
                    &#10095;
                </ArrowContainer>
            </QuantityContainer>
            <PriceContainer>{price}</PriceContainer>
            <RemoveButton onClick={deleteItemHandler}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
