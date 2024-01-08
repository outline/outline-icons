import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function InputIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4ZM9 9H8V7H12V9H11V15H12V17H8V15H9V9Z"
      />
    </Icon>
  );
}

export default React.forwardRef(InputIcon);
