// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function DoneIcon(props: Props): React$Element<any> {
  return (
    <Icon {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9.26825 11.3599L10.9587 13.3885L14.7 8.40006C15.0314 7.95823 15.6582 7.86869 16.1 8.20006C16.5419 8.53143 16.6314 9.15823 16.3 9.60006L11.8 15.6001C11.4128 16.1164 10.645 16.1361 10.2318 15.6402L7.7318 12.6402C7.37824 12.216 7.43556 11.5854 7.85984 11.2318C8.28412 10.8783 8.91468 10.9356 9.26825 11.3599Z" />
    </Icon>
  );
}
