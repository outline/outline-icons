import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function CoinsIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M15.9593 7.32719C18.3109 8.13927 20 10.3724 20 13C20 16.3137 17.3137 19 14 19C12.7543 19 11.5973 18.6204 10.6383 17.9706C14.2054 17.6486 17 14.6506 17 11C17 9.71134 16.6518 8.504 16.0443 7.46697L15.9593 7.32719ZM10 5C13.3137 5 16 7.68629 16 11C16 14.3137 13.3137 17 10 17C6.68629 17 4 14.3137 4 11C4 7.68629 6.68629 5 10 5ZM10 9C9.44772 9 9 9.44772 9 10V12L9.00673 12.1166C9.06449 12.614 9.48716 13 10 13C10.5523 13 11 12.5523 11 12V10L10.9933 9.88338C10.9355 9.38604 10.5128 9 10 9Z" />
    </Icon>
  );
}

export default React.forwardRef(CoinsIcon);
