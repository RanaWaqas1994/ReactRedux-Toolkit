import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { clearAllItem, removeItem } from "./redux/slice";
import { useNavigate } from "react-router-dom";

export default function CartList() {
  const CartListSelector = useSelector((state) => state.cart.items);
  const dispatch =useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = ()=> {
    localStorage.clear();
    dispatch(clearAllItem());
    alert("Order Placed")
    navigate("/");
  }


  // STEP 1: quantity state
  const [quantities, setQuantities] = useState({});

  console.log(CartListSelector);

  // STEP 2: quantity change handler
  const manageQuantity = (id, value) => {
    let qty = Number(value);

    // allow empty typing
    if (value === "") {
      setQuantities((prev) => ({
        ...prev,
        [id]: "",
      }));
      return;
    }

    // ❌ block negative / zero
    if (qty < 1) return;

    setQuantities((prev) => ({
      ...prev,
      [id]: qty,
    }));
  };

  // STEP 3: total calculation (price × qty)
  const total = CartListSelector.reduce((sum, item) => {
    const qty = Number(quantities[item.id]) || 1;
    return sum + item.price * qty;
  }, 0);

  return (
    <div className="cart-page">
      <div className="cart-box">

        {/* HEADER */}
        <div className="cart-top">
          <h2>Your Cart Items</h2>
          <span>{CartListSelector.length} items</span>
        </div>

        {/* STEP 4: CART ITEMS */}
        {CartListSelector.length > 0 ? (
          CartListSelector.map((item) => {
            const qty = quantities[item.id] || 1; // ⭐ DEFAULT 1 HERE

            return (
              <div className="cart-item" key={item.id}>
                <div className="cart-left">
                  <img src={item.thumbnail} alt={item.title} />

                  <div className="cart-info">
                    <h3>{item.title}</h3>
                    <p>{item.brand}</p>
                  </div>
                </div>

                <div className="cart-right">

                  {/* STEP 5: INPUT CONTROL */}
                  <input
                    type="number"
                    value={qty}
                    placeholder="Enter Quantity"
                    onKeyDown={(e) => {
                      // ❌ block minus
                      if (e.key === "-") {
                        e.preventDefault();
                      }
                    }}
                    onChange={(e) =>
                      manageQuantity(item.id, e.target.value)
                    }
                  />

                  <div className="actions">
                    {/* STEP 6: ITEM TOTAL */}
                    <h4>${item.price * qty}</h4>
                    <button onClick={()=> dispatch(removeItem(item))}>Remove</button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-cart">Your cart is empty</div>
        )}

        {/* STEP 7: GRAND TOTAL */}
        <div className="cart-footer">
          <h3>Total</h3>
          <h3>${total.toFixed(2)}</h3>
          <button onClick={handlePlaceOrder} className="btn-green">Proceed to Checkout</button>
        </div>

      </div>
    </div>
  );
}