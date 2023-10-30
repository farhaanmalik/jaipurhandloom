import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./component/Footer"
import Header from "./component/Header/Header"
import Home from "./page/Home"
import Products from "./page/Products"
import Contact from "./page/Contact"
import ProductDetails from "./page/ProductDetails";
import Cart from "./page/Cart";
import Login from "./component/User/Login";
import Register from "./component/User/Register";
import { useEffect } from "react";
// import Loader from "./component/Loader";
import { loadUser } from "./actions/userAction";
import { useDispatch } from "react-redux"

const App = () => {

  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setInterval(() => {
    //   setLoading(false);
    // }, 1200);

    dispatch(loadUser());
  }, [dispatch])

  // if (loading) {
  //   return <Loader />
  // }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
