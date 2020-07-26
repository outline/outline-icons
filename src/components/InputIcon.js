// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function InputIcon(props: Props) {
  return (
    <Icon {...props}>
      <path d="M9 15H8V17H12V15H11V9H12V7H8V9H9V15ZM7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V7C5 5.89543 5.89543 5 7 5Z" strokeWidth="2" />
    </Icon>
  );
}
