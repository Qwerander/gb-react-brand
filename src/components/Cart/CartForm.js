import { useState } from "react";
import cls from "./cart.module.scss";

export const CartForm = () => {
  const [formData, setFormData] = useState({
    country: "",
    state: "",
    postcode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form data:", formData);
  };

  return (
    <div className={cls.cart__formWrapper}>
      <h4 className={cls.cart__formTitle}>SHIPPING ADDRESS</h4>
      <form className={cls.cart__form} onSubmit={(e) => e.preventDefault()}>
        <input
          className={cls.cart__input}
          type="text"
          name="country"
          placeholder="Bangladesh"
          value={formData.country}
          onChange={handleInputChange}
        />
        <input
          className={cls.cart__input}
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleInputChange}
        />
        <input
          className={cls.cart__input}
          type="text"
          name="postcode"
          placeholder="Postcode / Zip"
          value={formData.postcode}
          onChange={handleInputChange}
        />
        <input
          className={cls.cart__submit}
          type="button"
          value="GET A QUOTE"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};
