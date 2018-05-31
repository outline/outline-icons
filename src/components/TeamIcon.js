// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function TeamIcon(props: Props) {
  return (
    <Icon {...props}>
      <path d="M14,20 L14,15 L10,15 L10,20 L7,20 C6.44771525,20 6,19.5522847 6,19 L6,5 C6,4.44771525 6.44771525,4 7,4 L17,4 C17.5522847,4 18,4.44771525 18,5 L18,19 C18,19.5522847 17.5522847,20 17,20 L14,20 Z M9,7 L9,9 L11,9 L11,7 L9,7 Z M13,7 L13,9 L15,9 L15,7 L13,7 Z M9,11 L9,13 L11,13 L11,11 L9,11 Z M13,11 L13,13 L15,13 L15,11 L13,11 Z" />
    </Icon>
  );
}
