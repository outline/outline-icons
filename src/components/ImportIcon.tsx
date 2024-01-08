import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function ImportIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7071 10.7071C17.0976 10.3166 17.0976 9.68342 16.7071 9.29289C16.3166 8.90237 15.6834 8.90237 15.2929 9.29289L13 11.5858V6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6L11 11.5858L8.70711 9.29289C8.31658 8.90237 7.68342 8.90237 7.29289 9.29289C6.90237 9.68342 6.90237 10.3166 7.29289 10.7071L11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071L16.7071 10.7071ZM19 14C19 13.4477 18.5523 13 18 13C17.4477 13 17 13.4477 17 14V17L7 17L7 14C7 13.4477 6.55229 13 6 13C5.44771 13 5 13.4477 5 14V18C5 18.5523 5.44771 19 6 19L18 19C18.5523 19 19 18.5523 19 18V14Z"
      />
    </Icon>
  );
}

export default React.forwardRef(ImportIcon);
