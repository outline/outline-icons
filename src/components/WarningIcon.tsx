import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

export default function WarningIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path d="M12.8831 5.66234C12.5071 4.95454 11.4929 4.95454 11.1169 5.66233L4.28049 18.5308C3.92665 19.1969 4.4094 20 5.16361 20H18.8364C19.5906 20 20.0734 19.1969 19.7195 18.5308L12.8831 5.66234ZM11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17ZM12 15C11 15 11 14 11 14V10C11 10 11 9 12 9C13 9 13 10 13 10V14C13 14 13 15 12 15Z" />
    </Icon>
  );
}
