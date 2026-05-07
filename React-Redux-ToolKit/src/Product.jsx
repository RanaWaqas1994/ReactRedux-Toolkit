//abh cart wale ko directly call ni kar sakte isko dispatch karna parhta ha like
//jo action hotye han unko ap UI se kese call karsakte ho "Usedispatch" Hook ki help se
import { useDispatch, useSelector } from "react-redux";
// import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from './redux/productSlice'
import { addItem, removeItem } from "./redux/slice";
export default function Product() {
  //  const selector = useSelector((state)=> state.cart.value)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const ProductSelector = useSelector((state) => state.products.items)
  console.log(ProductSelector);

  const Cartselector = useSelector((state) => state.cart.items);
  console.log(Cartselector.length, "Product Js");

  return (
    <div className="grid">
      {
        ProductSelector.length && ProductSelector.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.thumbnail} alt="Product" />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="brand">{item.brand}</div>
              <div className="price">{item.price}</div>
              <div className="rating">{item.rating}</div>
              {
                Cartselector.find(cartItem => cartItem.id === item.id) ?
                <button className="btn btn-cart remove-cart" onClick={() => dispatch(removeItem(item))} >
                  Remove from Cart</button> :
                <button className="btn btn-cart" onClick={() => dispatch(addItem(item))} >Add to Cart</button>

              }


            </div>

          </div>
        ))
      }

    </div>
  );
}