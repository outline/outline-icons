import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

export default function ThumbsDownIcon(props: Props): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon {...props}>
      <path d="M14.6126 13.6L15.3128 14.884C15.5112 15.4036 15.663 15.9394 15.7663 16.4852C15.8669 17.036 15.9171 17.5947 15.9161 18.1544C15.914 18.4283 15.8619 18.6995 15.7623 18.955C15.6565 19.2147 15.5042 19.4533 15.3128 19.6596C15.2096 19.7694 15.0842 19.8565 14.9446 19.9152C14.8051 19.9738 14.6546 20.0026 14.5029 19.9998C14.3846 19.9991 14.2672 19.9802 14.1547 19.9438C13.9347 19.8688 13.7355 19.744 13.5731 19.5792C13.4106 19.4145 13.2895 19.2144 13.2193 18.9951L13.0655 18.5107C12.4655 16.6172 10.9991 14.5 9 13L9 6C9 4.89543 9.89543 4 11 4L16.5 4C16.9712 3.99997 17.4272 4.1647 17.7874 4.46506C18.1475 4.76543 18.4679 5.64121 18.4679 5.64121C18.4679 5.64121 19.9327 9.69318 19.995 12C19.9988 12.1407 20 12.3689 20 12.6094C19.9999 13.158 19.553 13.6 19.0045 13.6L14.6126 13.6Z" />
      <path d="M5.12338 11.8896C5.05756 12.4819 5.52125 13 6.11726 13L8 13L8 4.5C8 4.22386 7.77614 4 7.5 4L6.89504 4C6.38549 4 5.95743 4.38314 5.90116 4.88957L5.12338 11.8896Z" />
    </Icon>
  );
}