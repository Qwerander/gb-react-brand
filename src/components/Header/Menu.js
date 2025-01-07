import cls from "./header.module.scss";

export const Menu = () => {
  return (
    <div className={cls.header__menu}>
      <p className={cls.header__menuTitle}>MENU</p>
      <ul className={cls.header__list}>
        <li className={cls.header__item}>
          <p className={cls.header__menuSubtitle}>MAN</p>
          <ul className={cls.header__sublist}>
            <li className={cls.header__subitem}>Accessories</li>
            <li className={cls.header__subitem}>Bags</li>
            <li className={cls.header__subitem}>Denim</li>
            <li className={cls.header__subitem}>T-Shirts</li>
          </ul>
        </li>
        <li className={cls.header__item}>
          <p className={cls.header__menuSubtitle}>WOMAN</p>
          <ul className={cls.header__sublist}>
            <li className={cls.header__subitem}>Accessories</li>
            <li className={cls.header__subitem}>
              Jackets&nbsp;&amp;&nbsp;Coats
            </li>
            <li className={cls.header__subitem}>Polos</li>
            <li className={cls.header__subitem}>T-Shirts</li>
            <li className={cls.header__subitem}>Shirts</li>
          </ul>
        </li>
        <li className={cls.header__item}>
          <p className={cls.header__menuSubtitle}>KIDS</p>
          <ul className={cls.header__sublist}>
            <li className={cls.header__subitem}>Accessories</li>
            <li className={cls.header__subitem}>
              Jackets&nbsp;&amp;&nbsp;Coats
            </li>
            <li className={cls.header__subitem}>Polos</li>
            <li className={cls.header__subitem}>T-Shirts</li>
            <li className={cls.header__subitem}>Shirts</li>
            <li className={cls.header__subitem}>Bags</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
