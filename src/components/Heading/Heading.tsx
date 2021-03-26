import styled from "styled-components";
import Text from "../Text/Text";
import { tags, sizes, HeadingProps } from "./types";

const style = {
  [sizes.MD]: {
    fontSize: "20px",
  },
  [sizes.LG]: {
    fontSize: "28px",
  },
  [sizes.XL]: {
    fontSize: "40px",
  },
  [sizes.XXL]: {
    fontSize: "64px",
  },
};

const Heading = styled(Text).attrs({ bold: false })<HeadingProps>`
  ${({ size }) => style[size || sizes.MD]}
  // font-weight:600;
  line-height: 1.1;
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
