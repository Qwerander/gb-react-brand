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
import { useSelector } from "react-redux";

export const Header = () => {
  const [burgerOpen, toggleBurgerOpen] = useState(false);
  const productsInCart = useSelector((state) => state.cart.productsInCart);

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
          <NavLink className={cn(cls.header__btn, cls.header__cart)} to="/cart">
            <Cart />
            {productsInCart.length ? <span className={cls.header__cartValue}>{productsInCart.length}</span> : null}
          </NavLink>
          {burgerOpen && <Menu />}
        </div>
      </div>
    </header>
  );
};
