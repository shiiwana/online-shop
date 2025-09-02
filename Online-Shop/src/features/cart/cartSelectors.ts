import { type RootState } from "../../app/store";
import type { CartItem } from "../../store/cartSlice"; // 👈 نوع رو ایمپورت کن

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartCount = (state: RootState) =>
  state.cart.items.reduce((total: number, item: CartItem) => total + item.quantity, 0);

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0);

