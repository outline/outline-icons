import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function IndentIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7C12 6.44772 12.4477 6 13 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H13C12.4477 8 12 7.55228 12 7ZM12 17C12 16.4477 12.4477 16 13 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H13C12.4477 18 12 17.5523 12 17ZM13 11C12.4477 11 12 11.4477 12 12C12 12.5523 12.4477 13 13 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13Z"
      />
      <path d="M4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.68342 6.90237 5.31658 6.90237 5.70711 7.29289L9.70711 11.2929C10.0976 11.6834 10.0976 12.3166 9.70711 12.7071L5.70711 16.7071C5.31658 17.0976 4.68342 17.0976 4.29289 16.7071C3.90237 16.3166 3.90237 15.6834 4.29289 15.2929L7.58579 12L4.29289 8.70711Z" />
    </Icon>
  );
}

export default React.forwardRef(IndentIcon);
