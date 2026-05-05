//abh cart wale ko directly call ni kar sakte isko dispatch karna parhta ha like
//jo action hotye han unko ap UI se kese call karsakte ho "Usedispatch" Hook ki help se
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
export default function Product() {
    //  const selector = useSelector((state)=> state.cart.value)
const dispatch = useDispatch()
  return (
    <div className="product-container">
        
      {/* Product Image */}
      <div className="product-image">
        <img
          src="https://images2.habeco.si/Upload/Product/cleveland---50-wireless-headphones_31757_productmain.webp"
          alt="Product"
        />
      </div>

      {/* Product Details */}
      <div className="product-details">

        <h1 className="title">Wireless Headphones</h1>

        <p className="price">Rs. 5,999</p>

        <p className="description">
          High quality wireless headphones with deep bass, noise cancellation,
          and long battery life. Perfect for music lovers.
        </p>

        <ul className="features">
          <li>✔ Bluetooth 5.0</li>
          <li>✔ 20 Hours Battery</li>
          <li>✔ Noise Cancellation</li>
          <li>✔ Fast Charging</li>
        </ul>
{/* Jo data hum bheje ge redux ke andar yani cart me tw wo hume recieve bhi karna parhe
ga header wale cart me (cart.jsx me) 
 */}
        <button className="btn" onClick={() => dispatch(addItem(1))}>Add to Cart </button>
        <button className="btn remove-cart" onClick={() => dispatch(removeItem(1))}>Remove From Cart </button>

      </div>

    </div>
  );
}