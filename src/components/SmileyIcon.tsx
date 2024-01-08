import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function SmileyIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM15.5355 15.7071C15.9261 15.3166 15.9261 14.6834 15.5355 14.2929C15.145 13.9024 14.5118 13.9024 14.1213 14.2929C12.9497 15.4645 11.0503 15.4645 9.87868 14.2929C9.48816 13.9024 8.85499 13.9024 8.46447 14.2929C8.07394 14.6834 8.07394 15.3166 8.46447 15.7071C10.4171 17.6597 13.5829 17.6597 15.5355 15.7071ZM8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9V10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10V9ZM15 8C14.4477 8 14 8.44772 14 9V10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10V9C16 8.44772 15.5523 8 15 8Z"
      />
    </Icon>
  );
}

export default React.forwardRef(SmileyIcon);
