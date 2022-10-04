import Category from "./components/Aside/Category/Category"
import Price from "./components/Aside/Price"
import Login from "./components/Login/Login"
import NavBarUser from "./components/NavBar/NavBarUser"
import SearchBar from "./components/SearchBar/SearchBar"
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes"
import Purchases from "./components/Purchases/Purchases"




function App() {


  return (
    
    <HashRouter>
    <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />

      <Route element={<ProtectedRoutes />}>

      <Route path='/purchases' element={<Purchases />} />
      
      </Route>

    </Routes>
  </HashRouter>

  )
}

export default App
