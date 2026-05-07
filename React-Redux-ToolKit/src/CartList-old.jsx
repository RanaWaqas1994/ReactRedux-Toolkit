import { useSelector } from "react-redux"

export default function CartList() {
    const CartListSelector = useSelector((state)=>state.cart.items)
    console.log(CartListSelector);

    const manageQuantity = (id,q)=> {
      console.log(id);
      
    }
    
  return (
 <div className="cart-page">
      <div className="cart-box">

        <div className="cart-top">
          <h2>Your Cart Items</h2>
          <span>{CartListSelector.length} items</span>
        </div>

        { CartListSelector.length > 0 ? CartListSelector.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-left">
              <img src={item.thumbnail} alt={item.title} />

              <div className="cart-info">
                <h3>{item.title}</h3>
                <p>{item.brand}</p>
              </div>
            </div>

            <div className="cart-right">
              <input onChange={(e)=>manageQuantity(item.id,e.target.value)} type="number" placeholder="Enter Quantity" />
              <div className="actions">
                  <h4>${item.price}</h4>
                  <button>Remove</button>
              </div>
            </div>
          </div>
        ))
        
        :     <div className="empty-cart">
      Your cart is empty
    </div>
    
    }

        <div className="cart-footer">
          <h3>Total</h3>
          <h3>{CartListSelector.reduce((sum,item)=> sum + item.price,0).toFixed(3)}</h3>
        </div>

      </div>
    </div>
  )
}
