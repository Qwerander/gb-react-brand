import cls from "./productCard.module.scss";

export const ProductCard = ({ id, size, image, alt, name, description, price }) => {
  return (
    <div className={cls.products__item}>
      <img className={cls.products__img} src={image} alt={alt} />
      <div className={cls.products__itemWrapper}>
        <h3 className={cls.pruducts__name}>{name}</h3>
        <p className={cls.products__text}>{description}</p>
        <p className={cls.products__text}>Размеры: {size.toString().split(',').join(' ')}</p>
        <div className={cls.products__bottom}>
            <span className={cls.products__price}>${price}</span>
            <button className={cls.products__btn}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

