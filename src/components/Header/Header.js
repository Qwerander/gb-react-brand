import { ReactComponent as Logo } from "../../assets/img/header/logo.svg";
import { ReactComponent as Search } from "../../assets/img/header/search.svg";
import { ReactComponent as Burger } from "../../assets/img/header/burger.svg";
import { ReactComponent as User } from "../../assets/img/header/user.svg";
import { ReactComponent as Cart } from "../../assets/img/header/cart.svg";
import { Menu } from "./Menu";
import { useState } from "react";
import cls from "./header.module.scss";
import cn from "classnames";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [burgerOpen, toggleBurgerOpen] = useState(false);

  return (
    <header className={cls.header}>
      <div className={cn("container", cls.header__container)}>
        <div className={cls.header__left}>
          <Logo />
          <button className={cls.header__btn}>
            <Search />
          </button>
        </div>
        <div className={cls.header__right}>
          <button
            className={cls.header__btn}
            onClick={() => toggleBurgerOpen((state) => !state)}
          >
            <Burger />
          </button>
          <button className={cls.header__btn}>
            <User />
          </button>
          <NavLink className={cls.header__btn} to="/cart">
            <Cart />
          </NavLink>
          {burgerOpen && <Menu />}
        </div>
      </div>
    </header>
  );
};
