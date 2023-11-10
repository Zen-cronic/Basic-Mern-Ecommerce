
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Cart } from "./pages/cart/cart";

import { Shop } from "./pages/shop/shop";
import { ShopContextProvider } from './context/shop-context';

function App() {
 
  console.log(window.location)

  return (
    <>
    <div className='App'>
    <ShopContextProvider>
      <Router>
        <NavBar/>
      
        <Routes>

          <Route path='/' element={<Shop/>}> </Route>
          <Route path='/cart' element={<Cart/>}> </Route>
          <Route path='/contact'></Route>
        </Routes>
      </Router>
    </ShopContextProvider>
    </div>
    </>
  )
 
}



export default App
