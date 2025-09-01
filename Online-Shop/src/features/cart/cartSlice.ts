import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// نوع داده برای آیتم داخل سبد خرید
export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

// نوع state
type CartState = {
  items: CartItem[];
};

// استیت اولیه
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // اضافه کردن محصول
    addToCart: (
      state,
      action: PayloadAction<{ id: number; title: string; price: number; image: string }>
    ) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // حذف محصول
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // افزایش تعداد
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },

    // کاهش تعداد (اگر ۱ بود، حذفش کن)
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
