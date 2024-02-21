import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import React from 'react';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {CheckoutContainer, CheckoutHeader, HeaderBlock, TotalValue} from "./checkout.styles"

const Checkout = () => {
    const {cartItems,totalPrice} = useContext(CartContext)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem) =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <TotalValue>Total: {totalPrice}</TotalValue>
        </CheckoutContainer>
    );
};

export default Checkout;
