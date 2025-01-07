import cls from "./intro.module.scss";
import cn from "classnames";
import img from '../../assets/img/intro/brand.png'
import imgMobile from '../../assets/img/intro/brand-mobile.png'

export const Intro = () => {
  return (
    <section className={cls.intro}>
      <div className={cn('container', cls.intro__container)}>
        <div className={cls.intro__left}>
          <picture>
            <source
              media="(max-width: 960px)"
              srcSet={imgMobile}
            />
            <source
              media="(max-width: 1300px)"
              srcSet={img}
            />
            <img className={cls.intro__img} src={img} alt="img" />
          </picture>
        </div>
        <div className={cls.intro__right}>
          <div className={cls.intro__wrapper}>
            <h1 className={cls.intro__title}>THE&nbsp;BRAND</h1>
            <h2 className={cls.intro__subtitle}>
              OF LUXERIOUS <span className={cls.intro__subtitleColor}>FASHION</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
