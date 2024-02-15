import { useContext } from 'react';
import CartContext from '../contexts/CartContext';
import { CartContextProps, CartItem } from '../contexts/types';

const ShoppingCart = () => {
    const { cartState, cartDispatch } = useContext(CartContext) as CartContextProps;

  const addToCart = (item: CartItem) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (itemId: number) => {
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const clearCart = () => {
    cartDispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartState.items.map((item) => (
          <li key={item.id}>
            {item.name} - <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addToCart({ id: 1, name: 'Product A' })}>Add Product A</button>
      <button onClick={() => addToCart({ id: 2, name: 'Product B' })}>Add Product B</button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default ShoppingCart;