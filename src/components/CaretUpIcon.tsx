import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function CaretUpIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M16.7071 14.7071C16.3166 15.0976 15.6834 15.0976 15.2929 14.7071L12 11.4142L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L11.2929 9.29289C11.6834 8.90237 12.3166 8.90237 12.7071 9.29289L16.7071 13.2929C17.0976 13.6834 17.0976 14.3166 16.7071 14.7071Z" />
    </Icon>
  );
}

export default React.forwardRef(CaretUpIcon);
