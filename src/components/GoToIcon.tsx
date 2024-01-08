import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function GoToIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M14.080855,4.6060807 L8.08085497,18.6060807 C7.86329935,19.1137105 8.09845092,19.7015894 8.6060807,19.919145 C9.11371048,20.1367007 9.70158941,19.9015491 9.91914503,19.3939193 L15.919145,5.3939193 C16.1367007,4.88628952 15.9015491,4.29841059 15.3939193,4.08085497 C14.8862895,3.86329935 14.2984106,4.09845092 14.080855,4.6060807 Z" />
    </Icon>
  );
}

export default React.forwardRef(GoToIcon);
