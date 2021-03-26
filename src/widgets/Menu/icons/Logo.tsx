import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 124 36" {...props}>
      <image
        width="124"
        height="36"
        href={isDark ? "images/galaxy/logowithtext.png" : "images/galaxy/logowithtext.png"}
      />
    </Svg>
  );
};

export default Logo;
