import cls from "./offer.module.scss";

export const OfferBlock = ({ img, alt, text, title }) => {
  return (
    <div className={cls.offer__block}>
      <img className={cls.offer__img} src={img} alt={alt} />
      <div className={cls.offer__content}>
        <p className={cls.offer__text}>{text}</p>
        <h3 className={cls.offer__title}>{title}</h3>
      </div>
    </div>
  );
};
