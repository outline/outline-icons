import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function Heading4Icon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 8C4 7.44772 4.44772 7 5 7C5.55228 7 6 7.44772 6 8V11H10V8C10 7.44772 10.4477 7 11 7C11.5523 7 12 7.44772 12 8V11V13V16C12 16.5523 11.5523 17 11 17C10.4477 17 10 16.5523 10 16V13H6V16C6 16.5523 5.55228 17 5 17C4.44772 17 4 16.5523 4 16V13V11V8Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18.2445 7.03031C18.6887 7.14231 19 7.54185 19 7.99997L19 13.5H19.5C20.0523 13.5 20.5 13.9477 20.5 14.5C20.5 15.0523 20.0523 15.5 19.5 15.5H19L19 16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16L17 15.5H14.5C14.148 15.5 13.822 15.3149 13.6415 15.0128C13.461 14.7106 13.4527 14.3358 13.6195 14.0259L17.1195 7.52587C17.3367 7.12251 17.8002 6.91832 18.2445 7.03031ZM17 13.5L17 11.9664L16.1742 13.5H17Z" />
    </Icon>
  );
}

export default React.forwardRef(Heading4Icon);
