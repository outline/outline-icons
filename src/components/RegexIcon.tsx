import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function RegexIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 15L5 15L5 19L9 19L9 15ZM15 14C15.5523 14 16 13.5523 16 13L16 10.7321L17.9641 11.866C18.4424 12.1422 19.054 11.9783 19.3301 11.5C19.6063 11.0217 19.4424 10.4101 18.9641 10.134L17 9.00001L18.9641 7.86603C19.4424 7.58989 19.6063 6.97829 19.3301 6.5C19.054 6.02171 18.4424 5.85784 17.9641 6.13398L16 7.26795L16 5C16 4.44772 15.5523 4 15 4C14.4477 4 14 4.44772 14 5L14 7.26796L12.0359 6.13398C11.5576 5.85784 10.946 6.02171 10.6699 6.5C10.3937 6.9783 10.5576 7.58989 11.0359 7.86603L13 9.00001L11.0359 10.134C10.5576 10.4101 10.3937 11.0217 10.6699 11.5C10.946 11.9783 11.5576 12.1422 12.0359 11.866L14 10.7321L14 13C14 13.5523 14.4477 14 15 14Z"
      />
    </Icon>
  );
}

export default React.forwardRef(RegexIcon);
