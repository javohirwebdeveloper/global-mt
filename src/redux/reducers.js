import { combineReducers } from "redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_COMPARE,
  ADD_TO_FAVORITES,
} from "./actions";

const initialState = {
  cart: [],
  compare: [],
  favorites: [],
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload);
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
