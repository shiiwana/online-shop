import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; 


export type CartItem = {
  id: number | string;
  title: string;
  price: number;
  image?: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = { items: [] };

type AddPayload = {
  id: number | string;
  title: string;
  price: number;
  image?: string;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<AddPayload>) => {
      const { id, title, price, image } = action.payload;
      const idx = state.items.findIndex((it) => it.id === id);
      if (idx >= 0) state.items[idx].quantity += 1;
      else state.items.push({ id, title, price, image, quantity: 1 });
    },
    increment: (state, action: PayloadAction<number | string>) => {
      const it = state.items.find((i) => i.id === action.payload);
      if (it) it.quantity += 1;
    },
    decrement: (state, action: PayloadAction<number | string>) => {
      const idx = state.items.findIndex((i) => i.id === action.payload);
      if (idx >= 0) {
        const it = state.items[idx];
        if (it.quantity > 1) it.quantity -= 1;
        else state.items.splice(idx, 1);
      }
    },
    removeItem: (state, action: PayloadAction<number | string>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartCount = (state: RootState) =>
  state.cart.items.reduce((sum, it) => sum + it.quantity, 0);
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((sum, it) => sum + it.price * it.quantity, 0);

export const { addItem, increment, decrement, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
