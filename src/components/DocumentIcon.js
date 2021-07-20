// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function DocumentIcon(props: Props): React$Element<any> {
  return (
    <Icon {...props}>
      <path d="M12,4 L12,9 C12,10.1045695 12.8954305,11 14,11 L19,11 L19,18 C19,19.1045695 18.1045695,20 17,20 L7,20 C5.8954305,20 5,19.1045695 5,18 L5,6 C5,4.8954305 5.8954305,4 7,4 L12,4 Z M14,4 L19,9 L14,9 L14,4 Z" />
    </Icon>
  );
}
