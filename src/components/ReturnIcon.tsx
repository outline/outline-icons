import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function ReturnIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M8.93942 8.64652C9.13468 8.45126 9.45126 8.45126 9.64652 8.64652L10.3535 9.35348C10.5487 9.54874 10.5487 9.86532 10.3535 10.0606L8.41406 12H17C17.5523 12 18 11.5523 18 11V7.5C18 6.94772 18.4477 6.5 19 6.5C19.5523 6.5 20 6.94772 20 7.5V11C20 12.6569 18.6569 14 17 14H8.41406L10.3535 15.9394C10.5487 16.1347 10.5487 16.4513 10.3535 16.6465L9.64652 17.3535C9.45126 17.5487 9.13468 17.5487 8.93942 17.3535L5.29304 13.7071C4.90252 13.3166 4.90252 12.6834 5.29304 12.2929L8.93942 8.64652Z" />
    </Icon>
  );
}

export default React.forwardRef(ReturnIcon);
