import { useSelector } from "react-redux";
import cls from "./products.module.scss";
import cn from "classnames";
import { ProductCard } from "../ProductCard/ProductCard";

export const Products = ({ itemsToShow = 9, showTitle = true, choosenSizes = [] }) => {
  const allProducts = useSelector((state) => state.products.products);

  const filteredProducts = choosenSizes.length
  ? allProducts.filter((product) =>
      product.size.some((size) => choosenSizes.includes(size))
    )
  : allProducts;

  const products = filteredProducts.slice(0, itemsToShow);


  return (
    <section className={cls.products}>
      <div className={cn("container", cls.products__container)}>
        {showTitle && (
          <>
            <h2 className={cls.products__title}>Fetured Items</h2>
            <p className={cls.products__descr}>
              Shop for items based on what we featured in this week
            </p>
          </>
        )}
        <div className={cls.products__wrapper}>
          {products.map((item) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                image={item.image}
                alt={item.alt}
                name={item.name}
                price={item.price}
                description={item.description}
                size={item.size}
              />
            );
          })}
        </div>
        {showTitle && (
          <div className={cls.products__buttons}>
            <button className={cls.products__btn}>Browse All Product</button>
          </div>
        )}
      </div>
    </section>
  );
};