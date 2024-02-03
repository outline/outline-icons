import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function LibraryIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.63017 4.59998C9.24373 5.03974 9 5.68317 9 6.4V17.6C9 18.3168 9.24372 18.9602 9.63013 19.4H9.12727C7.95241 19.4 7 18.3255 7 17V6.99998C7 5.67449 7.95241 4.59998 9.12727 4.59998H9.63017Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.20067 5.20001C6.07304 5.55302 6 5.96286 6 6.4V17.6C6 18.0372 6.07305 18.447 6.20068 18.8H5.7904C4.80159 18.8 4 17.7255 4 16.4V7.60001C4 6.27453 4.80159 5.20001 5.7904 5.20001H6.20067Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.125 4H11.875C10.8395 4 10 5.07452 10 6.4V17.6C10 18.9255 10.8395 20 11.875 20H18.125C19.1605 20 20 18.9255 20 17.6V6.4C20 5.07452 19.1605 4 18.125 4Z"
      />
    </Icon>
  );
}

export default React.forwardRef(LibraryIcon);
