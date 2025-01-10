import { useSelector } from "react-redux";
import cls from "./cart.module.scss";

export const CartResult = () => {
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  return (
    <div className={cls.cart__info}>
      <p className={cls.cart__grandTotal}>
        GRAND TOTAL <span>${cartTotal}</span>
      </p>
      <div className={cls.cart__divider}></div>
      <button className={cls.cart__checkout}>PROCEED TO CHECKOUT</button>
    </div>
  );
};
