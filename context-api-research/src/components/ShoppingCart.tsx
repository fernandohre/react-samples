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
  
  const generateRandomId = () => {
    return Math.floor(Math.random() * 100000);
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
      <button onClick={() => addToCart({ id: generateRandomId(), name: 'Product A' })}>Add Product A</button>
      <button onClick={() => addToCart({ id: generateRandomId(), name: 'Product B' })}>Add Product B</button>
      <button onClick={clearCart}>Clear Cart</button>
      <h3>Total: {cartState.items.length} items</h3>
    </div>
  );
};

export default ShoppingCart;