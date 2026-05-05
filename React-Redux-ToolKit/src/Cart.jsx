//jo store ke andar data nikalo ge kese "useSelector" se nikaal sakte ho
//jo action hotye han unko ap UI se kese call karsakte ho "Usedispatch" Hook ki help se

import { useSelector } from "react-redux"

export default function Cart() {
    const selector = useSelector((state)=> state.cart.value)
    console.log(selector);
    
  return (
      <div className="cart">
        🛒 Cart <span className="cart-count"> {selector} </span>
      </div>

  )
}
