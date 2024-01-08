import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function ToolsIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5659 6.68722C4.20441 7.37884 4 8.16555 4 9C4 11.7614 6.23858 14 9 14C9.24022 14 9.47649 13.9831 9.70767 13.9503L14.8787 19.1213C16.0503 20.2929 17.9497 20.2929 19.1213 19.1213C20.2929 17.9497 20.2929 16.0503 19.1213 14.8787L13.9503 9.70767C13.9831 9.47649 14 9.24022 14 9C14 6.23858 11.7614 4 9 4C8.16555 4 7.37884 4.20441 6.68722 4.5659L9.56066 7.43934C10.1464 8.02513 10.1464 8.97487 9.56066 9.56066C8.97487 10.1464 8.02513 10.1464 7.43934 9.56066L4.5659 6.68722ZM17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18Z"
      />
    </Icon>
  );
}

export default React.forwardRef(ToolsIcon);
