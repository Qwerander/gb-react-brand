import { Features } from "../../components/Features/Features";
import { Intro } from "../../components/Intro/Intro";
import { Offer } from "../../components/Offer/Offer";
import { Products } from "../../components/Products/Products";

export const MainPage = () => {
  return (
    <>
      <Intro />
      <Offer />
      <Products />
      <Features />
    </>
  );
};
