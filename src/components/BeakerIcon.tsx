import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function BeakerIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M15,4 C15.5522847,4 16,4.44771525 16,5 C16,5.51283584 15.6139598,5.93550716 15.1166211,5.99327227 L15,6 L15,10.764 L18.1708204,17.1055728 C18.2819047,17.3277415 18.3503873,17.56816 18.373337,17.8144116 L18.381966,18 C18.381966,19.0543618 17.5660882,19.9181651 16.5312284,19.9945143 L16.381966,20 L7.61803399,20 C7.3075438,20 7.00131767,19.9277098 6.7236068,19.7888544 C5.78269537,19.3183987 5.3746713,18.2063397 5.76466265,17.2480617 L5.82917961,17.1055728 L9,10.762 L9,6 C8.44771525,6 8,5.55228475 8,5 C8,4.48716416 8.38604019,4.06449284 8.88337887,4.00672773 L9,4 L15,4 Z M12.9995959,6 L10.9995959,6 L11,11 L13,11 L12.9995959,6 Z" />
    </Icon>
  );
}

export default React.forwardRef(BeakerIcon);
