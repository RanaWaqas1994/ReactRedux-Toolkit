import { useDispatch } from 'react-redux'
import './App.css'
import Header from './Header'
import Product from './Product'
import { clearAllItem } from './redux/slice'

function App() {

  const dispatch = useDispatch()

  return (
    <>
    <Header/>
  <h1 className='mainHeading'>React Redux + Redux ToolKit
  <button className='btn' onClick={()=>dispatch(clearAllItem())}>Clear Cart</button></h1>
  
    <Product/>
    </>
  )
}

export default App
