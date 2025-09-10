import { useAppDispatch, useAppSelector } from "../store/hooks";

import { increment, decrement, removeItem, selectCartItems, selectCartCount, selectCartTotal } from "../store/cartSlice";

const currency = new Intl.NumberFormat("fa-IR", { style: "currency", currency: "USD" });

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const totalQty = useAppSelector(selectCartCount);
  const totalPrice = useAppSelector(selectCartTotal);


  if (items.length === 0) {
    return (
      <div style={{ padding: 16 }}>
        <h2>سبد شما خالی است</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: 16 }}>
      <h1>سبد خرید</h1>

      {items.map((it) => (
        <div
          key={it.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            border: "1px solid #eee",
            padding: 12,
            margin: "8px 0",
            borderRadius: 8,
          }}
        >
          <img
            src={it.image || "https://via.placeholder.com/64"}
            alt={it.title}
            style={{ width: 64, height: 64, objectFit: "contain" }}
          />

          <div style={{ flex: 1 }}>
            <div>{it.title}</div>
            <div>قیمت واحد: {currency.format(it.price)}</div>


            <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 6 }}>
              <button onClick={() => dispatch(decrement(it.id))} disabled={it.quantity <= 1}>-</button>
              <span style={{ minWidth: 24, textAlign: "center" }}>{it.quantity}</span>
              <button onClick={() => dispatch(increment(it.id))}>+</button>
              <button onClick={() => dispatch(removeItem(it.id))} style={{ marginInlineStart: 12 }}>حذف</button>
            </div>
          </div>

          <div style={{ marginInlineStart: "auto" }}>
            <b>{currency.format(it.price * it.quantity)}</b>
          </div>
        </div>
      ))}

      <hr />
      <p>تعداد اقلام: {totalQty}</p>
      <h3>جمع کل: {currency.format(totalPrice)}</h3>
    </div>
  );
}
