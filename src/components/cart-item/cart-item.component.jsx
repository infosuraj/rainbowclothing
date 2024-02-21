import React, {useContext} from 'react';
import {CartItemContainer, ItemDetails, ImageContainer, ItemName, RemoveButton} from './cart-item.styles'
import {CartContext} from "../../contexts/cart.context";

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem
    const {deleteItemFromCart} = useContext(CartContext)

    const deleteItemHandler = () => deleteItemFromCart(cartItem)

    return (
        <CartItemContainer>
            <ImageContainer src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <ItemName>{name}</ItemName>
                <span className='price'>{quantity} x ${price}</span>
                <RemoveButton onClick={deleteItemHandler}>
                    &#10005;
                </RemoveButton>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;
