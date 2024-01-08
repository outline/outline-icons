import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function AlignImageCenterIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6ZM17 9H19C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H17V9ZM17 13H19C19.5523 13 20 13.4477 20 14C20 14.5523 19.5523 15 19 15H17V13ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H5ZM10 9C9.44772 9 9 9.44772 9 10V14C9 14.5523 9.44772 15 10 15H14C14.5523 15 15 14.5523 15 14V10C15 9.44772 14.5523 9 14 9H10ZM4 10C4 9.44772 4.44772 9 5 9H7V11H5C4.44772 11 4 10.5523 4 10ZM5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15H7V13H5Z"
      />
    </Icon>
  );
}

export default React.forwardRef(AlignImageCenterIcon);
