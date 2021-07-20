// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function InfoIcon(props: Props): React$Element<any> {
  return (
    <Icon {...props}>
      <path fillRule="evenodd" d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12ZM11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8ZM12 10C13 10 13 11 13 11V16C13 16 13 17 12 17C11 17 11 16 11 16V11C11 11 11 11 10.5 11C10 11 10 10 10 10H12Z" />
    </Icon>
  );
}
