import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function PlusIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M13,11 L13,6 C13,5.44771525 12.5522847,5 12,5 C11.4477153,5 11,5.44771525 11,6 L11,6 L11,11 L6,11 C5.44771525,11 5,11.4477153 5,12 C5,12.5522847 5.44771525,13 6,13 L11,13 L11,18 C11,18.5522847 11.4477153,19 12,19 C12.5522847,19 13,18.5522847 13,18 L13,13 L18,13 C18.5522847,13 19,12.5522847 19,12 C19,11.4477153 18.5522847,11 18,11 L13,11 Z" />
    </Icon>
  );
}

export default React.forwardRef(PlusIcon);
