import { Routes, Route } from "react-router-dom"
import Login from './components/Login'
import UserList from "./components/UserList"
import UserDetails from './components/UserDetails'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/UserList" element={<UserList/>}/>
      <Route path="/UserDetails/:id" element={<UserDetails/>}/>
      <Route path="/ProductList" element={<ProductList/>}/>
      <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
    </Routes>
  )
}

export default App
