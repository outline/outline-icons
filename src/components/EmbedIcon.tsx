import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

export default function EmbedIcon(props: Props): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 7H17C17.5523 7 18 7.44772 18 8V15C18 15.5523 17.5523 16 17 16H7C6.44772 16 6 15.5523 6 15V8C6 7.44772 6.44772 7 7 7ZM4 8C4 6.34315 5.34315 5 7 5H17C18.6569 5 20 6.34315 20 8V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V8ZM10 9.92066V13.0793C10 13.8884 10.9107 14.3625 11.5735 13.8986L13.8297 12.3192C14.3984 11.9211 14.3984 11.0789 13.8297 10.6808L11.5735 9.10142C10.9107 8.63748 10 9.11163 10 9.92066Z"
      />
    </Icon>
  );
}
