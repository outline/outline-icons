import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function ExportIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.29289 9.29289C6.90237 9.68342 6.90237 10.3166 7.29289 10.7071C7.68342 11.0976 8.31658 11.0976 8.70711 10.7071L11 8.41421V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8.41421L15.2929 10.7071C15.6834 11.0976 16.3166 11.0976 16.7071 10.7071C17.0976 10.3166 17.0976 9.68342 16.7071 9.29289L12.7071 5.29289C12.5196 5.10536 12.2652 5 12 5C11.7348 5 11.4804 5.10536 11.2929 5.29289L7.29289 9.29289ZM19 14C19 13.4477 18.5523 13 18 13C17.4477 13 17 13.4477 17 14V17L7 17L7 14C7 13.4477 6.55229 13 6 13C5.44771 13 5 13.4477 5 14V18C5 18.5523 5.44771 19 6 19L18 19C18.5523 19 19 18.5523 19 18V14Z"
      />
    </Icon>
  );
}

export default React.forwardRef(ExportIcon);
