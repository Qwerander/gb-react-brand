import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import cls from "./breadcrumbs.module.scss";
import cn from "classnames";

export const Breadcrumbs = () => {
  const location = useLocation();

  const products = useSelector((state) => state.products.products);
  const pathnames = location.pathname.split("/").filter((x) => x);

  const getProductNameById = (id) => {
    const product = products.find((product) => product.id === Number(id));
    return product ? product.name : `Товар ${id}`;
  };

  return (
    <section className={cls.breadcrumbs}>
      <div className={cn('container', cls.breadcrumbs__container)}>
        <h3 className={cls.breadcrumbs__title}>
          {pathnames.includes("cart") ? "SHOPPING CART" : "NEW ARRIVALS"}
        </h3>
        <nav className={cls.breadcrumbs__nav}>
          <ul className={cls.breadcrumbs__list}>
            <li className={cls.breadcrumbs__item}>
              <Link to="/">HOME</Link>
            </li>

            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              const isLast = index === pathnames.length - 1;

              const isId = !isNaN(value);
              const displayName = isId
                ? getProductNameById(value)
                : decodeURIComponent(value);

              return isLast ? (
                <li
                  key={to}
                  className={cn(cls.breadcrumbs__item, 'breadcrumbs__itemActive')}
                >
                  / {displayName.toUpperCase()}
                </li>
              ) : (
                <li key={to} className={cls.breadcrumbs__item}>
                  <Link to={to}> / {displayName.toUpperCase()}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
};
