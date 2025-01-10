import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { IntroProduct } from "../../components/IntroProduct/IntroProduct";
import { Price } from "../../components/Price/Price";
import { Products } from "../../components/Products/Products";
import { useSelector } from "react-redux";

export const ProductPage = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const [product] = products.filter((item) => item.id === +id);

  return (
    <>
      <Breadcrumbs />
      <IntroProduct alt={product.alt} img={product.image} />
      <Price id={id} price={product.price} alt={product.alt} image={product.image} name={product.name} />
      <Products itemsToShow={3} showTitle={false} />
    </>
  );
};
