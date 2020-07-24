// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function GlobeIcon(props: Props) {
  return (
    <Icon {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.584 4 4 7.584 4 12C4 16.416 7.584 20 12 20C16.416 20 20 16.416 20 12C20 7.584 16.416 4 12 4ZM9.5 15L9.5 14.4L6.09801 10.9141C6.03363 11.2663 6 11.6292 6 12C6 15.0397 8.2604 17.5514 11.192 17.9461V16.8C10 16.8 9.5 16 9.5 15ZM15.192 15H14V13C14 12.5 14 12 13 12H8.792L8.792 10H10C10.44 10 11 10 11 9L11 8H12.792C13.6403 8 14.3399 7.33099 14.3892 6.49456C16.5141 7.41795 18 9.53544 18 12C18 13.4966 17.4521 14.8652 16.5459 15.9161C16.3922 15.5083 16.1246 15 15.192 15Z" />
    </Icon>
  );
}
