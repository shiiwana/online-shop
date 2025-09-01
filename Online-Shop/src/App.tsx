import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import CartPage from "./pages/CartPage"
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  )
}

export default App

