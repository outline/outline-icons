import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

export default function ServerRackIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4C4.89543 4 4 4.89543 4 6V9C4 10.1046 4.89543 11 6 11H18C19.1046 11 20 10.1046 20 9V6C20 4.89543 19.1046 4 18 4H6ZM6 13C4.89543 13 4 13.8954 4 15V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V15C20 13.8954 19.1046 13 18 13H6ZM14 7.5C14 8.05228 13.5523 8.5 13 8.5C12.4477 8.5 12 8.05228 12 7.5C12 6.94772 12.4477 6.5 13 6.5C13.5523 6.5 14 6.94772 14 7.5ZM17 8.5C17.5523 8.5 18 8.05228 18 7.5C18 6.94772 17.5523 6.5 17 6.5C16.4477 6.5 16 6.94772 16 7.5C16 8.05228 16.4477 8.5 17 8.5ZM14 16.5C14 17.0523 13.5523 17.5 13 17.5C12.4477 17.5 12 17.0523 12 16.5C12 15.9477 12.4477 15.5 13 15.5C13.5523 15.5 14 15.9477 14 16.5ZM17 17.5C17.5523 17.5 18 17.0523 18 16.5C18 15.9477 17.5523 15.5 17 15.5C16.4477 15.5 16 15.9477 16 16.5C16 17.0523 16.4477 17.5 17 17.5ZM6 7.5C6 6.94772 6.44772 6.5 7 6.5H9C9.55228 6.5 10 6.94772 10 7.5C10 8.05228 9.55228 8.5 9 8.5H7C6.44772 8.5 6 8.05228 6 7.5ZM7 15.5C6.44772 15.5 6 15.9477 6 16.5C6 17.0523 6.44772 17.5 7 17.5H9C9.55228 17.5 10 17.0523 10 16.5C10 15.9477 9.55228 15.5 9 15.5H7Z"
      />
    </Icon>
  );
}