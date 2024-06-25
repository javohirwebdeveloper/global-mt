export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_TO_COMPARE = "ADD_TO_COMPARE";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
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
