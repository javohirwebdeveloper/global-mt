import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };
  return (
    <div>
      <h1>Savatcha</h1>

      <ul>
        {cart.map((product, index) => (
          <li key={product.id}>
            {product.name} ({product.category})
            <button onClick={() => handleRemoveFromCart(product.id)}>
              O'chirish
            </button>
          </li>
        ))}
      </ul>
      {cart.length === 0 && <p>Savatchada hech narsa yo'q.</p>}
    </div>
  );
};

export default Cart;


