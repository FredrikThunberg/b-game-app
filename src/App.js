// import Products from "./components/Products";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import ScrollToTop from "./components/Scrolltotop";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

const App = () => {
  return <div>

    
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          {/* <Route path="/Products" element={<Products />} /> */}
        </Routes>
      </ScrollToTop>
    

  </div>




};

export default App;