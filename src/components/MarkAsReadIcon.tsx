import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function MarkAsReadIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9587 16.3885L9.26825 14.3599C8.91468 13.9356 8.28412 13.8783 7.85984 14.2318C7.43556 14.5854 7.37824 15.216 7.7318 15.6402L10.2318 18.6402C10.645 19.1361 11.4128 19.1164 11.8 18.6001L16.3 12.6001C16.6314 12.1582 16.5419 11.5314 16.1 11.2001C15.6582 10.8687 15.0314 10.9582 14.7 11.4001L10.9587 16.3885Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9587 10.3885L9.26825 8.35987C8.91468 7.9356 8.28412 7.87827 7.85984 8.23184C7.43556 8.5854 7.37824 9.21597 7.7318 9.64024L10.2318 12.6402C10.645 13.1361 11.4128 13.1164 11.8 12.6001L16.3 6.60006C16.6314 6.15823 16.5419 5.53143 16.1 5.20006C15.6582 4.86869 15.0314 4.95823 14.7 5.40006L10.9587 10.3885Z"
      />
    </Icon>
  );
}

export default React.forwardRef(MarkAsReadIcon);
