import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function DuplicateIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C10.8954 4 10 4.89543 10 6V8H6C4.89543 8 4 8.89543 4 10V18C4 19.1046 4.89543 20 6 20H12C13.1046 20 14 19.1046 14 18V16H18C19.1046 16 20 15.1046 20 14V7.41421C20 6.88378 19.7893 6.37507 19.4142 6L18 4.58579C17.6249 4.21071 17.1162 4 16.5858 4H12ZM14 14H18V8H17C16.4477 8 16 7.55228 16 7V6H12V8.58579L13.4142 10C13.7893 10.3751 14 10.8838 14 11.4142V14ZM10 10H6V18H12V15V12H11C10.4477 12 10 11.5523 10 11V10Z"
      />
    </Icon>
  );
}

export default React.forwardRef(DuplicateIcon);
