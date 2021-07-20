// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function BrowserIcon(props: Props): React$Element<any> {
  return (
    <Icon {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7ZM6 17V11H18V17H6ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9C7.55228 9 8 8.55228 8 8C8 7.44772 7.55228 7 7 7ZM9 8C9 7.44772 9.44772 7 10 7C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9C9.44772 9 9 8.55228 9 8ZM13 7C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7Z" />
    </Icon>
  );
}
