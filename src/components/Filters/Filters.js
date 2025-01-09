import { useState } from "react";
import cls from "./filters.module.scss";
import cn from "classnames";
import { ReactComponent as Filter } from "../../assets/img/filters/filter.svg";
import { ReactComponent as FilterMobile } from "../../assets/img/filters/filter-mobile.svg";
import { ReactComponent as Arrow } from "../../assets/img/filters/arrow.svg";
import { FiltersMenu } from "./FiltersMenu";
import { FiltersSize } from "./FiltersSize";

export const Filters = () => {
  const [isFiltersOpen, toggleFiltersOpen] = useState(false);
  const [isFilterSizeOpen, toggleFilterSizeOpen] = useState(false);
  return (
    <section className={cls.filters}>
      <h2 className="visually-hidden">Фильтры</h2>
      <div className={cn("container", cls.filters__container)}>
        <div
          className={cls.filters__menuTitle}
          onClick={() => toggleFiltersOpen(true)}
        >
          <span>FILTER</span>
          <Filter className={cls.filters__menuTitle_desktop} />
          <FilterMobile className={cls.filters__menuTitle_mobile} />
        </div>
        {isFiltersOpen && <FiltersMenu toggleFiltersOpen={toggleFiltersOpen} />}
        <div className={cls.filters__select}>
          <div className={cls.filters__item}>
            TRENDING NOW <Arrow />
          </div>
          <FiltersSize
            isFilterSizeOpen={isFilterSizeOpen}
            toggleFilterSizeOpen={toggleFilterSizeOpen}
          />
          <div className={cls.filters__item}>
            PRICE <Arrow />
          </div>
        </div>
      </div>
    </section>
  );
};
