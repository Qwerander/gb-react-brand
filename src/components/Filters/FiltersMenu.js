import cls from "./filters.module.scss";
import { ReactComponent as Filter } from "../../assets/img/filters/filter.svg";

export const FiltersMenu = ({ toggleFiltersOpen }) => {
  return (
    <div className={cls.filters__filter}>
      <div
        className={cls.filters__menuTitle}
        onClick={() => toggleFiltersOpen(false)}
      >
        <span>FILTER</span>
        <Filter className={cls.filters__menuTitle} />
      </div>

      <div className={cls.filters__menu}>
        <ul className={cls.filters__list}>
          <li className={cls.filters__listItem}>
            <p className={cls.filters__menuSubtitle}>CATEGORY</p>
            <ul className={cls.filters__sublist}>
              <li className={cls.filters__subitem}>Accessories</li>
              <li className={cls.filters__subitem}>Bags</li>
              <li className={cls.filters__subitem}>Denim</li>
              <li className={cls.filters__subitem}>
                Hoodies&nbsp;&amp;&nbsp;Sweatshirts
              </li>
              <li className={cls.filters__subitem}>
                Jackets&nbsp;&amp;&nbsp;Coats
              </li>
              <li className={cls.filters__subitem}>Polos</li>
              <li className={cls.filters__subitem}>Shirts</li>
              <li className={cls.filters__subitem}>Shoes</li>
              <li className={cls.filters__subitem}>
                Sweaters&nbsp;&amp;&nbsp;Knits
              </li>
              <li className={cls.filters__subitem}>T-Shirts</li>
              <li className={cls.filters__subitem}>Tanks</li>
            </ul>
          </li>
          <li className={cls.filters__listItem}>
            <p className={cls.filters__menuSubtitle}>BRAND</p>
          </li>
          <li className={cls.filters__listItem}>
            <p className={cls.filters__menuSubtitle}>DESIGNER</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
