import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

export default function ArrowIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path d="M11.2929 16.7071C10.9024 16.3166 10.9024 15.6834 11.2929 15.2929L14.5858 12L11.2929 8.70711C10.9024 8.31658 10.9024 7.68342 11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071Z" />
      <path d="M8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11L14 11C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13L8 13Z" />
    </Icon>
  );
}
