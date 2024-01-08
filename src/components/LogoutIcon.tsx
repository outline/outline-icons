import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function LogoutIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.5C12.9482 3.26294 13.7423 3.91283 13.9481 5H16C17.1046 5 18 5.89543 18 7V17C18 18.1046 17.1046 19 16 19H13.9481C13.7423 20.0872 12.9482 20.7371 12 20.5L8 19.5C6.89543 19.2239 6 18.1046 6 17V7C6 5.89543 6.89543 4.77614 8 4.5L12 3.5ZM14 7V17H16V7H14ZM10 12C10 11.3688 10.4477 10.8412 11 10.8214C11.5523 10.8017 12 11.3294 12 12C12 12.6706 11.5523 13.1983 11 13.1786C10.4477 13.1588 10 12.6312 10 12Z"
      />
    </Icon>
  );
}

export default React.forwardRef(LogoutIcon);
