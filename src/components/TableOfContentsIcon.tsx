import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

export default function TableOfContentsIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path d="M17,16 C17.5522847,16 18,16.4477153 18,17 C18,17.5522847 17.5522847,18 17,18 L7,18 C6.44771525,18 6,17.5522847 6,17 C6,16.4477153 6.44771525,16 7,16 L17,16 Z M17,11 C17.5522847,11 18,11.4477153 18,12 C18,12.5522847 17.5522847,13 17,13 L10,13 C9.44771525,13 9,12.5522847 9,12 C9,11.4477153 9.44771525,11 10,11 L17,11 Z M17,6 C17.5522847,6 18,6.44771525 18,7 C18,7.55228475 17.5522847,8 17,8 L7,8 C6.44771525,8 6,7.55228475 6,7 C6,6.44771525 6.44771525,6 7,6 L17,6 Z" />
    </Icon>
  );
}
