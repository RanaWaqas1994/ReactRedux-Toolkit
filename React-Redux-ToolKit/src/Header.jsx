import Cart from "./Cart";

export default function Header() {
  return (
    
    <header className="header">
      
      <div className="logo">
        ShopEasy
      </div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
      </nav>

    <Cart/>

    </header>
  )
}