import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProductList from "./pages/ProductList"
import ProductDetail from "./pages/ProductDetail"
import Profile from "./pages/Profile"
import ProfileInfo from "./pages/ProfileInfo"
import Orders from "./pages/Orders"
import Setting from "./pages/Setting"


export default function App() {
  return (
    <div className="p-6 w-full h-screen bg-gray-200 ">
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/profile" element={<Profile />}>
                <Route path="info" element={<ProfileInfo />} />
                <Route path="order" element={<Orders />} />
                <Route path="setting" element={<Setting />} />
              </Route>   
        </Routes>
      </BrowserRouter>
    </div>
  )
}