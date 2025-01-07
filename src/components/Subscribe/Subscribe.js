import { useState } from "react";
import cls from "./subscribe.module.scss";
import cn from "classnames";
import avatar from "../../assets/img/subscribe/avatar.png";

export const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted email:", email);

    setEmail("");
  };

  return (
    <section className={cls.subscribe}>
      <div className={cn("container", cls.subscribe__container)}>
        <div className={cls.subscribe__left}>
          <img className={cls.subscribe__img} src={avatar} alt="avatar" />
          <p className={cls.subscribe__text}>
            &laquo;Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi,
            <i>a&nbsp;pulvinar purus condimentum&raquo;</i>
          </p>
        </div>
        <div className={cls.subscribe__right}>
          <h3 className={cls.subscribe__title}>SUBSCRIBE</h3>
          <p className={cls.subscribe__info}>FOR OUR NEWLETTER AND PROMOTION</p>
          <form className={cls.subscribe__form} onSubmit={handleFormSubmit}>
            <input
              className={cls.subscribe__input}
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleInputChange}
            />
            <button className={cls.subscribe__btn} type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
