import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function CloudIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path d="M8,18 C5.790861,18 4,16.209139 4,14 C4,12.0821369 5.34974274,10.4795231 7.15113317,10.0902537 C7.05257193,9.7447267 7,9.37850277 7,9 C7,6.790861 8.790861,5 11,5 C12.8646508,5 14.4313032,6.27588293 14.8745618,8.0022534 L15,8 C17.7614237,8 20,10.2385763 20,13 C20,15.7614237 17.7614237,18 15,18 L15,18 Z" />
    </Icon>
  );
}
