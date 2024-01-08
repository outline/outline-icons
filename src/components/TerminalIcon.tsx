import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function TerminalIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4ZM17 12C17 12.5523 16.5523 13 16 13H13.5C12.9477 13 12.5 12.5523 12.5 12C12.5 11.4477 12.9477 11 13.5 11H16C16.5523 11 17 11.4477 17 12ZM8.70711 12.7071L10.7071 10.7071C11.0976 10.3166 11.0976 9.68342 10.7071 9.29289L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L8.58579 10L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071Z"
      />
    </Icon>
  );
}

export default React.forwardRef(TerminalIcon);
