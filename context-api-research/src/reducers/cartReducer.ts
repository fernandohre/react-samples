import { CartAction, CartState } from "../contexts/types";

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, items: [...state.items, action.payload] };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
      case 'CLEAR_CART':
        return { ...state, items: [] };
      default:
        return state;
    }
};
  
export default cartReducer;