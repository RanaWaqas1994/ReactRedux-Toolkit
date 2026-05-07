//jo store ke andar data nikalo ge kese "useSelector" se nikaal sakte ho
//jo action hotye han unko ap UI se kese call karsakte ho "Usedispatch" Hook ki help se

import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function Cart() {
    const Cartselector = useSelector((state)=> state.cart.items);
    console.log(Cartselector.length,"Cart Js");
    
  return (
      <div className="cart">
      <Link to="/cart"> 🛒 Cart <span className="cart-count"> {Cartselector.length?Cartselector.length:0} </span></Link>
      </div>

  )
}
