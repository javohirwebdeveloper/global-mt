import { combineReducers } from "redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_COMPARE,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  UPDATE_CART_ITEM_QUANTITY,
} from "./actions";

const initialState = {
  cart: [],
  compare: [],
  favorites: [],
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingProductIndex].quantity += action.payload.quantity;
        return updatedCart;
      } else {
        return [
          ...state,
          {
            product: action.payload.product,
            quantity: action.payload.quantity,
          },
        ];
      }
    case UPDATE_CART_ITEM_QUANTITY:
      const updatedCart = [...state];
      const itemIndex = updatedCart.findIndex(
        (item) => item.product.id === action.payload.productId
      );
      if (itemIndex !== -1) {
        updatedCart[itemIndex].quantity = action.payload.newQuantity;
      }
      return updatedCart;
    case "REMOVE_FROM_CART":
      return state.filter(
        (item) => item.product.id !== action.payload.productId
      );
    default:
      return state;
  }
};

const compareReducer = (state = initialState.compare, action) => {
  switch (action.type) {
    case ADD_TO_COMPARE:
      return [...state, action.payload];
    default:
      return state;
  }
};

const favoritesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
  compare: compareReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
