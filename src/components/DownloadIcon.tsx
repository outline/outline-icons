import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function DownloadIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M7.29289 10.2929C7.68342 9.90237 8.31658 9.90237 8.70711 10.2929L12 13.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929Z" />
      <path d="M11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7Z" />
      <path d="M18 17C18.5523 17 19 17.4477 19 18C19 18.5523 18.5523 19 18 19L6 19C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17L12 17H18Z" />
    </Icon>
  );
}

export default React.forwardRef(DownloadIcon);
