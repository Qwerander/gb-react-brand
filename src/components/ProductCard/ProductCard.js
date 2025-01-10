import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cls from "./productCard.module.scss";
import { addToCart, decrementQuantity } from "../../store/cartSlice";

export const ProductCard = ({
  id,
  size,
  image,
  alt,
  name,
  description,
  price,
}) => {
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
    <div className={cls.products__item}>
      <Link className={cls.products__link} to={`/catalog/${id}`}>
        <img className={cls.products__img} src={image} alt={alt} />
      </Link>
      <div className={cls.products__itemWrapper}>
        <h3 className={cls.pruducts__name}>{name}</h3>
        <p className={cls.products__text}>{description}</p>
        <p className={cls.products__text}>
          Размеры: {size.toString().split(",").join(" ")}
        </p>
        <div className={cls.products__bottom}>
          <span className={cls.products__price}>${price}</span>

          {productInCart ? (
            <div className={cls.products__quantityControls}>
              <button
                className={cls.products__quantityBtn}
                onClick={handleRemoveFromCart}
              >
                -
              </button>
              <span className={cls.products__quantity}>
                {productInCart.quantity}
              </span>
              <button
                className={cls.products__quantityBtn}
                onClick={handleAddToCart}
              >
                +
              </button>
            </div>
          ) : (
            <button className={cls.products__btn} onClick={handleAddToCart}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
