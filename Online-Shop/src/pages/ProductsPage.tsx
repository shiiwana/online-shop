import { useState } from "react"

const mockProducts = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
]

export default function ProductsPage() {
  const [products] = useState(mockProducts)

  const addToCart = (product: any) => {
    console.log("Add to cart:", product)
  }

  
  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <div key={product.id}>
          <span>{product.name}</span>
          <span>Price: {product.price}</span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}
