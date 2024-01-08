import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function BuildingBlocksIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path d="M11 14.6333C11 13.7313 10.2687 13 9.36667 13H5.63333C4.73127 13 4 13.7313 4 14.6333V18.3667C4 19.2687 4.73127 20 5.63333 20H9.36667C10.2687 20 11 19.2687 11 18.3667V14.6333Z" />
      <path d="M20 14.6333C20 13.7313 19.2687 13 18.3667 13H14.6333C13.7313 13 13 13.7313 13 14.6333V18.3667C13 19.2687 13.7313 20 14.6333 20H18.3667C19.2687 20 20 19.2687 20 18.3667V14.6333Z" />
      <path d="M16 5.63333C16 4.73127 15.1643 4 14.1333 4H9.86667C8.83573 4 8 4.73127 8 5.63333V9.36667C8 10.2687 8.83573 11 9.86667 11H14.1333C15.1643 11 16 10.2687 16 9.36667V5.63333Z" />
    </Icon>
  );
}

export default React.forwardRef(BuildingBlocksIcon);
