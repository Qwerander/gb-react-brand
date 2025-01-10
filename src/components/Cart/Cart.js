import { useSelector, useDispatch } from "react-redux";
import cls from "./cart.module.scss";
import cn from "classnames";
import { CartCard } from "./CartCard";
import { CartForm } from "./CartForm";
import { CartResult } from "./CartResult";
import { clearCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.productsInCart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <section className={cls.cart}>
      <div className={cn("container", cls.cart__container)}>
        <div className={cls.cart__left}>
          {productsInCart.length > 0 ? (
            productsInCart.map((product) => (
              <CartCard
                key={product.id}
                id={product.id}
                alt={product.alt}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))
          ) : (
            <p className={cls.cart__empty}>Your cart is empty.</p>
          )}
          <div className={cls.cart__btns}>
            <button className={cls.cart__btn} onClick={handleClearCart}>
              CLEAR SHOPPING CART
            </button>
            <Link className={cls.cart__btn} to={'/catalog'}>CONTINUE SHOPPING</Link>
          </div>
        </div>
        <div className={cls.cart__right}>
          <CartForm />
          <CartResult />
        </div>
      </div>
    </section>
  );
};
