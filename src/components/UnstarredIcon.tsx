import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function UnstarredIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 13.8904L14.3399 15.1206L13.893 12.5151L15.7861 10.6698L13.17 10.2897L12 7.9191L10.83 10.2897L8.21394 10.6698L10.107 12.5151L9.66009 15.1206L12 13.8904ZM7.95801 13.2133L7.34635 16.7796C7.20624 17.5965 8.06367 18.2194 8.7973 17.8338L12 16.15L15.2027 17.8338C15.9363 18.2194 16.7938 17.5965 16.6537 16.7796L16.042 13.2133L18.633 10.6877C19.2265 10.1091 18.899 9.10117 18.0788 8.98198L14.4981 8.46167L12.8967 5.21698C12.5299 4.47373 11.4701 4.47373 11.1033 5.21698L9.50191 8.46167L5.92118 8.98198C5.10096 9.10117 4.77345 10.1091 5.36697 10.6877L7.95801 13.2133Z"
      />
    </Icon>
  );
}

export default React.forwardRef(UnstarredIcon);
