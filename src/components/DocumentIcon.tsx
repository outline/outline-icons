import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

export default function DocumentIcon({
  outline = false,
  ...rest
}: Props & {
  expanded?: boolean;
}): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...rest}>
      {outline ? (
        <path d="M7 18H8H16H17V17V11H14C12.8954 11 12 10.1046 12 9V6H8H7V7V17L7 18ZM14 6V9H17V8.82843L14.1716 6H14ZM15 4L19 8V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V6C5 4.89543 5.89543 4 7 4H15Z" />
      ) : (
        <path d="M12,4 L12,9 C12,10.1045695 12.8954305,11 14,11 L19,11 L19,18 C19,19.1045695 18.1045695,20 17,20 L7,20 C5.8954305,20 5,19.1045695 5,18 L5,6 C5,4.8954305 5.8954305,4 7,4 L12,4 Z M14,4 L19,9 L14,9 L14,4 Z" />
      )}
    </Icon>
  );
}
