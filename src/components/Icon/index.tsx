import "./index.scss";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef, useState } from "react";

import classNames from "classnames";

export interface LfIconProps {
  name: string;
  disabled?: boolean;
  loop?: boolean;
  autoplay?: boolean;
}
export const LfIcon = (props: LfIconProps) => {
  const { name, disabled, loop, autoplay } = props;
  const [iconData, setIconData] = useState(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const init = async () => {
    const data = await import(`../assets/${name}.json`);
    setIconData({ ...data });
  };
  const renderDom = () => {
    if (iconData) {
      return (
        <Lottie
          lottieRef={lottieRef}
          className={classNames("lf-icon", {
            "lf-disable": disabled,
          })}
          animationData={iconData}
          loop={loop}
          autoplay={autoplay}
        ></Lottie>
      );
    }
    return null;
  };
  useEffect(() => {
    init();
  }, [name]);
  return <>{renderDom()}</>;
};
