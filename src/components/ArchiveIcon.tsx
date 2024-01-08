import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function ArchiveIcon(
  {
    open,
    ...rest
  }: Props & {
    open?: boolean;
  },
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...rest}>
      {open ? (
        <path d="M4.92365 7.21548C4.82775 6.67158 5.19092 6.15293 5.73481 6.05702L17.5525 3.97325C18.0964 3.87734 18.6151 4.24051 18.711 4.7844C18.8069 5.3283 18.4437 5.84696 17.8998 5.94286L6.08211 8.02664C5.53822 8.12254 5.01956 7.75937 4.92365 7.21548ZM6 9H18V17C18 18.1046 17.1046 19 16 19H8C6.89544 19 6 18.1046 6 17V9ZM11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H11Z" />
      ) : (
        <path d="M6,6 L18,6 C18.5522847,6 19,6.44771525 19,7 C19,7.55228475 18.5522847,8 18,8 L6,8 C5.44771525,8 5,7.55228475 5,7 C5,6.44771525 5.44771525,6 6,6 Z M6,9 L18,9 L18,17 C18,18.1045695 17.1045695,19 16,19 L8,19 C6.8954305,19 6,18.1045695 6,17 L6,9 Z M11,11 C10.4477153,11 10,11.4477153 10,12 C10,12.5522847 10.4477153,13 11,13 L13,13 C13.5522847,13 14,12.5522847 14,12 C14,11.4477153 13.5522847,11 13,11 L11,11 Z" />
      )}
    </Icon>
  );
}

export default React.forwardRef(ArchiveIcon);
