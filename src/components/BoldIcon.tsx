import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function BoldIcon(
  props: Props
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path d="M18 15.4286C18 17.9533 16.2091 20 14 20H8C7.44772 20 7 19.4883 7 18.8571V5.14286C7 4.51167 7.44772 4 8 4H13C15.2091 4 17 6.0467 17 8.57143C17 9.69102 16.6478 10.7166 16.0632 11.5114C17.2239 12.3116 18 13.7665 18 15.4286ZM9 17.7143H14C15.1046 17.7143 16 16.6909 16 15.4286C16 14.1662 15.1046 13.1429 14 13.1429H9V17.7143ZM9 10.8571H13C14.1046 10.8571 15 9.83379 15 8.57143C15 7.30906 14.1046 6.28571 13 6.28571H9V10.8571Z" />
    </Icon>
  );
}
