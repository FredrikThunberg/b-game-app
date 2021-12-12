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

    <HashRouter basename={process.env.PUBLIC_URL} >
      <ScrollToTop>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path="/Register" element={<Register />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/ProductList" element={<ProductList />} />
          <Route exact path="/ProductPage" element={<ProductPage />} />
          {/* <Route path="/Products" element={<Products />} /> */}
        </Routes>
      </ScrollToTop>
    </HashRouter>

  </div>




};

export default App;