import cls from "./filters.module.scss";
import { ReactComponent as Arrow } from "../../assets/img/filters/arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUniqueSizes, toggleSize } from "../../store/filtersSlice";
import { extractUniqueSizes } from "../../helpers/extractUniqueSizes";

export const FiltersSize = ({
  isFilterSizeOpen,
  toggleFilterSizeOpen,
  id = null,
}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const sizes = useSelector((state) => state.filters.sizes);
  const choosenSizes = useSelector((state) => state.filters.choosenSizes);

  const handleSizeClick = (size) => {
    dispatch(toggleSize(size));
  };

  useEffect(() => {
    dispatch(setUniqueSizes(extractUniqueSizes(products)));
  }, [dispatch, products]);

  const currentSizes = id
    ? products.find((product) => product.id === id).size
    : sizes;

  return (
    <div className={cls.filters__item}>
      <span
        onClick={() => {
          toggleFilterSizeOpen((state) => !state);
        }}
      >
        SIZE <Arrow />{" "}
      </span>
      {isFilterSizeOpen && (
        <div className={cls.filters__size}>
          {currentSizes.map((size) => (
            <div key={size} className={cls.filters__sizeItem}>
              <label>
                <input
                  type="checkbox"
                  checked={choosenSizes.includes(size)}
                  onChange={() => handleSizeClick(size)}
                />
                {size}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
