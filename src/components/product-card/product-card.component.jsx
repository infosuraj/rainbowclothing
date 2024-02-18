import './product-card.styles.scss'

import React,{useContext} from 'react';
import Button from "../button/button.component";
import Images from '../../assets'
import {CartContext} from "../../contexts/cart.context";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)

    return (
        <div className="product-card-container">
            <img src={Images[imageUrl]} alt={`${name}`} width={300} height={300}/>
            <div className="footer">
                <span className='name'>
                    {name}
                </span>
                <span className='price'>
                    {price}
                </span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </div>
    );
};

export default ProductCard;
