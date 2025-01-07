import cls from "./offer.module.scss";
import cn from "classnames";
import img1 from "../../assets/img/offer/offer-1.jpg";
import img2 from "../../assets/img/offer/offer-2.jpg";
import img3 from "../../assets/img/offer/offer-3.jpg";
import img4 from "../../assets/img/offer/offer-4.jpg";
import { OfferBlock } from "./OfferBlock";

export const Offer = () => {
  return (
    <section className={cls.offer}>
      <div className={cn("container", cls.offer__container)}>
        <OfferBlock img={img1} alt={'Картинка-1'} text={'30% OFF'} title={'FOR WOMEN'}/>
        <OfferBlock img={img2} alt={'Картинка-2'} text={'HOT DEAL'} title={'FOR MEN'}/>
        <OfferBlock img={img3} alt={'Картинка-3'} text={'NEW ARRIVALS'} title={'FOR KIDS'}/>
        <OfferBlock img={img4} alt={'Картинка-4'} text={'LUXIROUS & TRENDY'} title={'ACCESORIESN'}/>
      </div>
    </section>
  );
};
