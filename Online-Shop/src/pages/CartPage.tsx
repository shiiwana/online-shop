import { useState } from "react"

const mockCart = [
  { id: 1, name: "Product 1", price: 100, quantity: 2 },
  { id: 2, name: "Product 2", price: 200, quantity: 1 },
]

export default function CartPage() {
  const [cart, setCart] = useState(mockCart)

  const increaseQuantity = (id: number) => {
    setCart(cart.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item))
  }

  const decreaseQuantity = (id: number) => {
    setCart(cart.map(item => item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item))
  }

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id))
  }


  
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div>
      <h1>Cart</h1>
      {cart.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span> x {item.quantity}</span>
          <span>Price: {item.price}</span>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <h2>Total: {total}</h2>
    </div>
  )
}
