import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function GrowIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M19.5984 11H18.3976C18.1772 11 17.9961 10.823 17.9961 10.5987V7.41508L7.40945 17.9974H10.5945C10.815 17.9974 10.9961 18.1744 10.9961 18.3987V19.5987C10.9961 19.819 10.8189 20 10.5945 20H5C4.44882 20 4 19.5515 4 19.0007V13.4013C4 13.181 4.17716 13 4.40157 13H5.60236C5.82283 13 6.00394 13.177 6.00394 13.4013V16.5849L16.5866 6.00262H13.4016C13.1811 6.00262 13 5.82557 13 5.60131V4.40131C13 4.18098 13.1772 4 13.4016 4L19 4C19.5512 4 20 4.44852 20 4.99934V10.5948C20 10.823 19.8228 11 19.5984 11Z" />
    </Icon>
  );
}

export default React.forwardRef(GrowIcon);
