import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/productsSlice";
import products from "./data/products";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Subscribe } from "./components/Subscribe/Subscribe";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ products }));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/catalog"} element={<CatalogPage />} />
        <Route path={"/catalog/:id"} element={<ProductPage />} />
        <Route path={"cart"} element={<CartPage />} />
      </Routes>
      <Subscribe />
      <Footer />
    </>
  );
};
