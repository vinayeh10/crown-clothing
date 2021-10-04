import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
});

export const removeCartItem = item => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: item
});

export const clearCartItem = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const clearAllCartItems = () => ({
    type: CartActionTypes.CLEAR_ALL_ITEMS_FROM_CART,
    payload: null
});