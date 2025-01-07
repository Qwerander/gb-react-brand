import cls from "./features.module.scss";
import cn from "classnames";
import { FeatureBlock } from "./FeatureBlock";
import { ReactComponent as Icon1 } from "../../assets/img/features/icon-1.svg";
import { ReactComponent as Icon2 } from "../../assets/img/features/icon-2.svg";
import { ReactComponent as Icon3 } from "../../assets/img/features/icon-3.svg";

export const Features = () => {
  return (
    <section className={cls.feature}>
      <div className={cn("container", cls.feature__container)}>
        <FeatureBlock
          Icon={Icon1}
          text={
            "Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innovation with extensive models."
          }
          title={"Free Delivery"}
        />
        <FeatureBlock
          Icon={Icon2}
          text={
            "Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innovation with extensive models."
          }
          title={"Sales & discounts"}
        />
        <FeatureBlock
          Icon={Icon3}
          text={
            "Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innovation with extensive models."
          }
          title={"Quality assurance"}
        />
      </div>
    </section>
  );
};
