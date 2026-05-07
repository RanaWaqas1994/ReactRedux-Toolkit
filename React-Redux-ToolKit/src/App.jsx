// import { useDispatch } from 'react-redux'
import './App.css'
import CartList from './CartList'
import Header from './Header'
import Product from './Product'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import { clearAllItem } from './redux/slice'

function App() {

  // const dispatch = useDispatch()

  return (
    <>
<BrowserRouter>
    <Header/>
 
  <Routes>
    <Route path='/' element={<Product/>}></Route> 
    <Route path='/cart' element={<CartList/>}></Route> 
    
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
