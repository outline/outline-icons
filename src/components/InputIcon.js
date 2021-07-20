// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function InputIcon(props: Props): React$Element<any> {
  return (
    <Icon {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6ZM7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 6H17C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17V7C6 6.44772 6.44772 6 7 6ZM9 9H8V7H12V9H11V15H12V17H8V15H9V9Z" />
    </Icon>
  );
}
