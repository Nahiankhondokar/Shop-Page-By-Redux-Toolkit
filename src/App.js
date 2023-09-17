import { Route, Routes } from "react-router-dom";
import AllProduct from "./pages/AllProduct/AllProduct";
import CartProduct from "./pages/CartProduct/CartProduct";
import Header from "./components/Header/Header";
import "./App.css";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/all-product" element={<AllProduct />} />
        <Route path="/cart-product" element={<CartProduct />} />
      </Routes>
    </>
  );
}

export default App;
