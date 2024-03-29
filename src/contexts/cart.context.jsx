import {createContext, useEffect, useState} from 'react';

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    );
}

const deleteCartItem = (cartItems, cartItemToDelete) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToDelete.id
    );

    if (existingCartItem.quantity) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id)
    }
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    removeItemFromCart: () => {
    },
    deleteItemFromCart: () => {
    },
    cartCount: 0,
    totalPrice: 0,
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount)
    }, [cartItems]);

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price, 0);
        setTotalPrice(newTotalPrice);
    }, [cartItems]);


    const addItemToCart = (product) =>
        setCartItems(addCartItem(cartItems, product));

    const removeItemFromCart = (cartItemToRemove) =>
        setCartItems(removeCartItem(cartItems, cartItemToRemove))

    const deleteItemFromCart = (cartItemToDelete) =>
        setCartItems(deleteCartItem(cartItems, cartItemToDelete))

    const value =
        {
            isCartOpen,
            setIsCartOpen,
            cartItems,
            addItemToCart,
            cartCount,
            removeItemFromCart,
            deleteItemFromCart,
            totalPrice
        };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
