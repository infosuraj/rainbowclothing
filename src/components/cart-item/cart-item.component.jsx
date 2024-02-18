import React from 'react';
import './cart-item.styles.scss'
import Images from "../../assets";

const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem

    return (
        <div className='cart-item-container'>
            <img src={Images[imageUrl]} alt={`${name}`} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    );
};

export default CartItem;
