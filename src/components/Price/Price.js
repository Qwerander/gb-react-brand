import { FiltersSize } from "../Filters/FiltersSize";
import cls from "./price.module.scss";
import cn from "classnames";
import { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/img/filters/arrow.svg";
import { ReactComponent as Cart } from "../../assets/img/price/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity } from "../../store/cartSlice";

export const Price = ({ id, price, name, image, alt }) => {
  const [isFilterSizeOpen, toggleFilterSizeOpen] = useState(false);
  const dispatch = useDispatch();

  const productsInCart = useSelector((state) => state.cart.productsInCart);

  const productInCart = productsInCart.find((product) => product.id === id);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        name,
        image,
        alt,
        price,
        quantity: 1,
      })
    );
  };

  const handleRemoveFromCart = () => {
    if (productInCart && productInCart.quantity > 0) {
      dispatch(decrementQuantity({ id }));
    }
  };
  return (
    <section className={cls.price}>
      <div className={cn("container", cls.price__container)}>
        <h3 className={cls.price__title}>MEN COLLECTION</h3>
        <p className={cls.price__info}>MOSCHINO CHEAP AND CHIC</p>
        <p className={cls.price__descr}>
          Compellingly actualize fully researched processes before proactive
          outsourcing. Progressively syndicate collaborative architectures
          before cutting-edge services. Completely visualize parallel core
          competencies rather than exceptional portals.{" "}
        </p>
        <p className={cls.price__price}>${price}</p>

        <div className={cls.price__select}>
          <div className={cls.price__item}>
            CHOOSE COLOR <Arrow />
          </div>
          <FiltersSize
            isFilterSizeOpen={isFilterSizeOpen}
            toggleFilterSizeOpen={toggleFilterSizeOpen}
            id={+id}
          />
          <div className={cls.price__item}>
            QUANTITY <Arrow />
          </div>
        </div>
        <div className={cls.price__buttons}>
          {productInCart ? (
            <div className={cls.price__quantityControls}>
              <button
                className={cls.price__quantityBtn}
                onClick={handleRemoveFromCart}
              >
                -
              </button>
              <span className={cls.price__quantity}>
                {productInCart.quantity}
              </span>
              <button
                className={cls.price__quantityBtn}
                onClick={handleAddToCart}
              >
                +
              </button>
            </div>
          ) : (
            <button className={cls.price__btn} onClick={handleAddToCart}>
              <Cart />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
