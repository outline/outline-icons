import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function CheckmarkIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M10.3801949,14.0826173 L7.75057979,11.0397723 C7.20059635,10.4033619 6.21972707,10.3173765 5.55974694,10.8477185 C4.89976681,11.3780605 4.81059688,12.3239001 5.36058032,12.9603105 L9.24943294,17.4602754 C9.89219597,18.2040451 11.0864488,18.1745362 11.6888655,17.3999992 L18.6888002,8.40006953 C19.2042612,7.73733301 19.0649733,6.79713833 18.377692,6.30008593 C17.6904108,5.80303354 16.7153955,5.93734707 16.1999346,6.60008359 L10.3801949,14.0826173 Z" />
    </Icon>
  );
}

export default React.forwardRef(CheckmarkIcon);
