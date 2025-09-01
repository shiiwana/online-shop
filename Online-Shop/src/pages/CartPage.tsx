import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">سبد خرید</h1>
      {cartItems.length === 0 ? (
        <p>سبد خرید خالی است.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border p-2 rounded"
            >
              <span>{item.title}</span>
              <span>{item.price} $</span>
              <span>x {item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;

<div className="mt-4 font-bold">
  مجموع:{" "}
  {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} $
</div>