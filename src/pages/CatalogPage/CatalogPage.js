import { useSelector } from "react-redux";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Features } from "../../components/Features/Features";
import { Filters } from "../../components/Filters/Filters";
import { Products } from "../../components/Products/Products";

export const CatalogPage = () => {
  const choosenSizes = useSelector(state => state.filters.choosenSizes)
  return (
    <>
      <Breadcrumbs />
      <Filters />
      <Products showTitle={false} choosenSizes={choosenSizes}/>
      <Features />
    </>
  );
};
