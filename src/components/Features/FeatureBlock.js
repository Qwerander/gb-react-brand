import cls from "./features.module.scss";

export const FeatureBlock = ({ Icon, text, title }) => {
  return (
    <div className={cls.feature__item}>
      <Icon />
      <h3 className={cls.feature__title}>{title}</h3>
      <p className={cls.feature__text}>{text}</p>
    </div>
  );
};
