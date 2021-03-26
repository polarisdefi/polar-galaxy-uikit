import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const GeyserIcon: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <image width="24" height="24" href={"images/galaxy/geyserIcon.png"} />
    </Svg>
  );
};

export default GeyserIcon;
