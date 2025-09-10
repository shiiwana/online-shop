import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addItem } from "../store/cartSlice";

type Product = { id: number | string; name: string; price: number };

const mockProducts: Product[] = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
];

export default function ProductsPage() {
  const [products] = useState<Product[]>(mockProducts);
  const dispatch = useAppDispatch();

  const addToCart = (p: Product) => {
  
    dispatch(
      addItem({
        id: p.id,
        title: p.name,
        price: p.price,
        image: "",
      })
    );
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>Products</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((p) => (
          <li
            key={p.id}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              border: "1px solid #ddd",
              padding: 12,
              marginBottom: 8,
              borderRadius: 8,
            }}
          >
            <span style={{ flex: 1 }}>{p.name}</span>
            <span>Price: {p.price}</span>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
