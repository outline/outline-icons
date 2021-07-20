// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function CommentIcon(props: Props): React$Element<any> {
  return (
    <Icon {...props}>
      <path d="M18 4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3l-1.586 1.586a2 2 0 0 1-2.828 0L9 18H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12zm0 2H6v10h3.828L12 18.172 14.172 16H18V6zm-5 6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h4zm2-4a1 1 0 0 1 0 2H9a1 1 0 1 1 0-2h6z" />
    </Icon>
  );
}
