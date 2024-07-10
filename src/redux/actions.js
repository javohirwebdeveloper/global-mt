export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_TO_COMPARE = "ADD_TO_COMPARE";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY";

export const addToCart = (product, quantity = 1) => ({
  type: ADD_TO_CART,
  payload: { product, quantity },
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: { productId },
});

export const removeFromFavorites = (productId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: productId,
});

export const addToCompare = (product) => ({
  type: ADD_TO_COMPARE,
  payload: product,
});

export const addToFavorites = (product) => ({
  type: ADD_TO_FAVORITES,
  payload: product,
});

export const updateCartItemQuantity = (productId, newQuantity) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: { productId, newQuantity },
});
