// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function CameraIcon(props: Props): React$Element<any> {
  return (
    <Icon {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.61803 5C8.23926 5 7.893 5.214 7.72361 5.55279L7 7H6C4.89543 7 4 7.89543 4 9V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V9C20 7.89543 19.1046 7 18 7H17L16.2764 5.55279C16.107 5.214 15.7607 5 15.382 5H8.61803ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15ZM18 10C18 10.5523 17.5523 11 17 11C16.4477 11 16 10.5523 16 10C16 9.44772 16.4477 9 17 9C17.5523 9 18 9.44772 18 10Z" />
    </Icon>
  );
}
