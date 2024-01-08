import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function ItalicIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M12.5 6C11.6716 6 11 5.32843 11 4.5C11 3.67157 11.6716 3 12.5 3C13.3284 3 14 3.67157 14 4.5C14 5.32843 13.3284 6 12.5 6ZM10.7802 10H10C9.44772 10 9 9.55228 9 9C9 8.44772 9.44772 8 10 8H12C12.631 8 13.1043 8.57732 12.9806 9.19612L11.459 16.8039C11.3507 17.3454 11.7019 17.8723 12.2435 17.9806C12.3081 17.9935 12.3738 18 12.4396 18H13C13.5523 18 14 18.4477 14 19C14 19.5523 13.5523 20 13 20H12.4396C12.2421 20 12.045 19.9805 11.8513 19.9417C10.2266 19.6168 9.17293 18.0363 9.49787 16.4117L10.7802 10Z" />
    </Icon>
  );
}

export default React.forwardRef(ItalicIcon);
