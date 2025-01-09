import cls from "./introProduct.module.scss";
import cn from "classnames";

export const IntroProduct = ({ img, alt }) => {
  return (
    <section className={cls.introProduct}>
      <h1 className="visually-hidden">BRAND</h1>
      <div className={cn("container", cls.introProduct__container)}>
        <div className={cls.introProduct__left}>
          <img className={cls.introProduct__img} src={img} alt={alt} />
        </div>
      </div>
    </section>
  );
};
