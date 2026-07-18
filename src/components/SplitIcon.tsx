import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function SplitIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M14 5L18 5C19.1046 5 20 5.89543 20 7L20 17C20 18.1046 19.1046 19 18 19L14 19L14 5ZM6 19C4.89543 19 4 18.1046 4 17L4 7C4 5.89543 4.89543 5 6 5L10 5L10 19L6 19Z" />
      <path d="M12 3L12 21" stroke="currentColor" strokeWidth="2" />
    </Icon>
  );
}

export default React.forwardRef(SplitIcon);
