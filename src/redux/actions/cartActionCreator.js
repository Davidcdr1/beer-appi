import cartActionTypes from "./cartActionTypes";

export function addToCart(item) {
  return {
    type: cartActionTypes.ADD_TO_CART,
    item,
  };
}

export function removeFromCart(item) {
  return {
    type: cartActionTypes.REMOVE_FROM_CART,
    item,
  };
}
