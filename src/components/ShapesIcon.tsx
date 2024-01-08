import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function ShapesIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M11 14.6333C11 13.7313 10.2687 13 9.36667 13H5.63333C4.73127 13 4 13.7313 4 14.6333V18.3667C4 19.2687 4.73127 20 5.63333 20H9.36667C10.2687 20 11 19.2687 11 18.3667V14.6333Z" />
      <path d="M13 16.5C13 18.433 14.567 20 16.5 20C18.433 20 20 18.433 20 16.5C20 14.567 18.433 13 16.5 13C14.567 13 13 14.567 13 16.5Z" />
      <path d="M12.3412 5.3085C11.9475 4.69618 11.0525 4.69618 10.6588 5.3085L7.99049 9.45924C7.56266 10.1248 8.0405 11 8.83167 11H14.1683C14.9595 11 15.4373 10.1248 15.0095 9.45924L12.3412 5.3085Z" />
    </Icon>
  );
}

export default React.forwardRef(ShapesIcon);
