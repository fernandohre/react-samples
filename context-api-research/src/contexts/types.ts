import { Dispatch } from "react";

export interface CartItem {
    id: number;
    name: string;
}

export interface CartState {
    items: CartItem[];
}

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'CLEAR_CART' };

export interface CartContextProps {
    cartState: CartState;
    cartDispatch: Dispatch<CartAction>;
}