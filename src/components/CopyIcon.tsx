import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function CopyIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.75 4C9.784 4 9 4.784 9 5.75V13.25C9 13.7141 9.18437 14.1592 9.51256 14.4874C9.84075 14.8156 10.2859 15 10.75 15H18.25C18.7141 15 19.1592 14.8156 19.4874 14.4874C19.8156 14.1592 20 13.7141 20 13.25V5.75C20 4.784 19.216 4 18.25 4H10.75ZM11 13V6H18V13H11ZM5.75 9C4.784 9 4 9.784 4 10.75V18.25C4 18.7141 4.18437 19.1592 4.51256 19.4874C4.84075 19.8156 5.28587 20 5.75 20H13.25C13.7141 20 14.1592 19.8156 14.4874 19.4874C14.8156 19.1592 15 18.7141 15 18.25V17.5V17C15 17 15 16 14 16C13 16 13 17 13 17V17.5V18H6V11H6.5H7C7 11 8 11 8 10C8 9 7 9 7 9H6.5H5.75Z"
      />
    </Icon>
  );
}
