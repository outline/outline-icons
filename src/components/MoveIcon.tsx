import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function MoveIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2071 8.79289C11.8166 8.40237 11.1834 8.40237 10.7929 8.79289C10.4024 9.18342 10.4024 9.81658 10.7929 10.2071L11.5858 11L5 11C4.44771 11 4 11.4477 4 12C4 12.5523 4.44771 13 5 13L11.5858 13L10.7929 13.7929C10.4024 14.1834 10.4024 14.8166 10.7929 15.2071C11.1834 15.5976 11.8166 15.5976 12.2071 15.2071L14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12C15 11.7348 14.8946 11.4804 14.7071 11.2929L12.2071 8.79289ZM6 5C5.44772 5 5 5.44771 5 6L5 8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8L7 7L17 7L17 17L7 17L7 16C7 15.4477 6.55228 15 6 15C5.44772 15 5 15.4477 5 16L5 18C5 18.5523 5.44772 19 6 19L18 19C18.5523 19 19 18.5523 19 18L19 6C19 5.44771 18.5523 5 18 5L6 5Z"
      />
    </Icon>
  );
}

export default React.forwardRef(MoveIcon);
