import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../assets/img/footer/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/img/footer/instagram.svg";
import { ReactComponent as Pic } from "../../assets/img/footer/pic.svg";
import { ReactComponent as Twitter } from "../../assets/img/footer/twitter.svg";
import cn from "classnames";
import cls from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className={cn("container", cls.footer__container)}>
        <p className={cls.footer__text}>
          &copy; 2022 Brand All Rights Reserved.
        </p>
        <div className={cls.footer__socials}>
          <Link className={cls.footer__link} to="/">
            <Facebook />
          </Link>

          <Link className={cls.footer__link} to="/">
            <Instagram />
          </Link>

          <Link className={cls.footer__link} to="/">
            <Pic />
          </Link>

          <Link className={cls.footer__link} to="/">
            <Twitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};
