import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function DoneIcon(
  {
    outline = false,
      ...props
  }: Props & {
    outline?: boolean
  },
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      {outline ? (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2191 13.0413L9.95124 11.5199C9.68607 11.2017 9.21315 11.1587 8.89495 11.4239C8.57675 11.6891 8.53376 12.162 8.79893 12.4802L10.6739 14.7301C10.9838 15.102 11.5596 15.0873 11.85 14.7L15.225 10.2001C15.4735 9.86872 15.4063 9.39863 15.075 9.1501C14.7436 8.90158 14.2735 8.96874 14.025 9.3001L11.2191 13.0413Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
          />
        </>
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9.26825 11.3599L10.9587 13.3885L14.7 8.40006C15.0314 7.95823 15.6582 7.86869 16.1 8.20006C16.5419 8.53143 16.6314 9.15823 16.3 9.60006L11.8 15.6001C11.4128 16.1164 10.645 16.1361 10.2318 15.6402L7.7318 12.6402C7.37824 12.216 7.43556 11.5854 7.85984 11.2318C8.28412 10.8783 8.91468 10.9356 9.26825 11.3599Z"
        />
      )}
    </Icon>
  );
}

export default React.forwardRef(DoneIcon);
