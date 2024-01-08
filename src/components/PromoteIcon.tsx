import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function PromoteIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8.00002V9.00002V13V14L4.00673 14.1166C4.06449 14.614 4.48716 15 5 15C5.47269 15 5.86879 14.672 5.97313 14.2312L8 14.6656V17L8.0064 17.1134C8.05297 17.5235 8.34939 17.8681 8.75746 17.9702L12.7575 18.9702L12.8685 18.9915C13.4584 19.0712 14 18.6123 14 18V15.9513L16 16.3799V5.62017L5.97313 7.76879C5.86879 7.32799 5.47269 7.00002 5 7.00002C4.44772 7.00002 4 7.44773 4 8.00002ZM17 5.40589V16.5941L18.7905 16.9778C19.413 17.1112 20 16.6367 20 16V6.00002C20 5.36337 19.413 4.88882 18.7905 5.02221L17 5.40589ZM10 15.0941V16.219L12 16.719V15.5227L10 15.0941Z"
      />
    </Icon>
  );
}

export default React.forwardRef(PromoteIcon);
