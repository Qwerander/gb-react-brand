import cls from "./cart.module.scss";
import { ReactComponent as Close } from "../../assets/img/shopping-cart/close.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  removeFromCart,
} from "../../store/cartSlice";

export const CartCard = ({ id, image, alt, price, quantity, name }) => {
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

  const handleRemove = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className={cls.cart__card}>
      <div className={cls.cart__imgWrapper}>
        <img className={cls.cart__img} src={image} alt={alt} />
      </div>
      <div className={cls.cart__contentWrapper}>
        <span className={cls.cart__close}>
          <Close onClick={handleRemove} />
        </span>
        <h4 className={cls.cart__title}>{name}</h4>
        <p className={cls.cart__category}>T-SHIRT</p>
        <p className={cls.cart__text}>
          Price: <span className={cls.cart__textPrice}>${price}</span>
        </p>
        <p className={cls.cart__text}>Color: Red</p>
        <p className={cls.cart__text}>Size: Xl </p>

        <div className={cls.cart__quantityControls}>
          <p className={cls.cart__text}>Quantity:</p>
          <button
            className={cls.cart__quantityBtn}
            onClick={handleRemoveFromCart}
          >
            -
          </button>
          <span className={cls.cart__value}>{quantity}</span>
          <button className={cls.cart__quantityBtn} onClick={handleAddToCart}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
