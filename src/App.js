import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./store/productsSlice";
import products from "./data/products";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ products }));
  }, [dispatch]);

  return <></>;
};
