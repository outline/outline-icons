import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function ArrowIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.2929 17.7071C10.9024 17.3166 10.9024 16.6834 11.2929 16.2929L14.5858 13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11L14.5858 11L11.2929 7.70711C10.9024 7.31658 10.9024 6.68342 11.2929 6.29289C11.6834 5.90237 12.3166 5.90237 12.7071 6.29289L17.7071 11.2929C18.0976 11.6834 18.0976 12.3166 17.7071 12.7071L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071Z"
      />
    </Icon>
  );
}

export default React.forwardRef(ArrowIcon);
