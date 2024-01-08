import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function LightningIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3934 4.08065C12.9695 3.89928 12.4766 4.03119 12.2 4.40002L6.19999 12.4C5.97273 12.703 5.93618 13.1084 6.10557 13.4472C6.27496 13.786 6.62122 14 6.99999 14H10.8195L10.0136 18.8356C9.93781 19.2904 10.1827 19.738 10.6066 19.9194C11.0305 20.1008 11.5234 19.9688 11.8 19.6L17.8 11.6C18.0273 11.297 18.0638 10.8916 17.8944 10.5528C17.725 10.214 17.3788 10 17 10H13.1805L13.9864 5.16441C14.0622 4.70966 13.8173 4.26202 13.3934 4.08065Z"
      />
    </Icon>
  );
}

export default React.forwardRef(LightningIcon);
