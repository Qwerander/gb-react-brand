import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Products } from "../../components/Products/Products";

export const ProductPage = () => {
  return (
    <>
      <Breadcrumbs />
      <Products itemsToShow={3} showTitle={false} />
    </>
  );
};
