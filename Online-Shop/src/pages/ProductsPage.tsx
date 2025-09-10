import { useEffect, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addItem } from "../store/cartSlice";

type Product = {
  id: number | string;
  title: string;
  price: number;
  images?: string[];
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=12")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;

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
            <span style={{ flex: 1 }}>{p.title}</span>
            <span>Price: {p.price}</span>
            <button
              onClick={() =>
                dispatch(
                  addItem({
                    id: p.id,
                    title: p.title,
                    price: p.price,
                    image: p.images?.[0] ?? "",
                  })
                )
              }
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
