import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function PublishIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7ZM10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7ZM14 5C13.4477 5 13 5.44772 13 6C13 6.55228 13.4477 7 14 7H17V17H14C13.4477 17 13 17.4477 13 18C13 18.5523 13.4477 19 14 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H14ZM11.2929 8.79289C11.6834 8.40237 12.3166 8.40237 12.7071 8.79289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L12.7071 15.2071C12.3166 15.5976 11.6834 15.5976 11.2929 15.2071C10.9024 14.8166 10.9024 14.1834 11.2929 13.7929L12.0858 13H9.5C8.94772 13 8.5 12.5523 8.5 12C8.5 11.4477 8.94772 11 9.5 11H12.0858L11.2929 10.2071C10.9024 9.81658 10.9024 9.18342 11.2929 8.79289ZM7 10C7 10.5523 6.55228 11 6 11C5.44772 11 5 10.5523 5 10C5 9.44772 5.44772 9 6 9C6.55228 9 7 9.44772 7 10ZM6 15C6.55228 15 7 14.5523 7 14C7 13.4477 6.55228 13 6 13C5.44772 13 5 13.4477 5 14C5 14.5523 5.44772 15 6 15ZM7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17C6.55228 17 7 17.4477 7 18ZM10 19C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17C9.44772 17 9 17.4477 9 18C9 18.5523 9.44772 19 10 19Z"
      />
    </Icon>
  );
}

export default React.forwardRef(PublishIcon);
