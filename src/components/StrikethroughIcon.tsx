import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function StrikethroughIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M9.26756 9C9.09739 8.70583 9 8.36429 9 8C9 6.89543 9.89543 6 11 6H16C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H11C8.79086 4 7 5.79086 7 8C7 8.3453 7.04375 8.68038 7.12602 9H9.26756ZM16.874 15C16.9562 15.3196 17 15.6547 17 16C17 18.2091 15.2091 20 13 20H8C7.44772 20 7 19.5523 7 19C7 18.4477 7.44772 18 8 18H13C14.1046 18 15 17.1046 15 16C15 15.6357 14.9026 15.2942 14.7324 15H16.874Z" />
      <path d="M5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12V12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12V12Z" />
    </Icon>
  );
}

export default React.forwardRef(StrikethroughIcon);
