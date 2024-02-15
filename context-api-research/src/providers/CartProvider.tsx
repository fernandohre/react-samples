import { ReactNode, useReducer } from 'react';
import { CartState } from '../contexts/types';
import CartContext from '../contexts/CartContext';
import cartReducer from '../reducers/cartReducer';

const CartProvider = ({children}: { children : ReactNode }) => {
  const initialState: CartState = {
    items: [],
  };

  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;