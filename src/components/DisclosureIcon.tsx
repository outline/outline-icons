import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function DisclosureIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.4 9.2C8.84183 8.86863 9.46863 8.95817 9.8 9.4L12 12.3333L14.2 9.4C14.5314 8.95817 15.1582 8.86863 15.6 9.2C16.0418 9.53137 16.1314 10.1582 15.8 10.6L13.2 14.0667C12.6 14.8667 11.4 14.8667 10.8 14.0667L8.2 10.6C7.86863 10.1582 7.95817 9.53137 8.4 9.2Z" />
    </Icon>
  );
}

export default React.forwardRef(DisclosureIcon);
