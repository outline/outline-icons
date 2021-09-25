// @flow
import React from "react";
import Icon from "./Icon";
import type { Props } from "./Icon";

export default function SportIcon(props: Props): React$Element<any> {
  return (
    <Icon {...props}>
      <path fillRule="evenodd" cliprule="evenodd" d="M16.8284 7.17157C15.2663 5.60948 12.7337 5.60948 11.1716 7.17157C10.3641 7.97906 9.70816 9.30756 9.48691 10.6613C9.26266 12.0333 9.51733 13.1742 10.1716 13.8284C10.6151 14.2719 11.2822 14.5318 12.0934 14.5834C12.0322 14.8793 12 15.1859 12 15.5C12 15.8746 12.0458 16.2384 12.132 16.5863C11.7433 16.5713 11.3556 16.5233 10.9782 16.436L7.70711 19.7071C7.31658 20.0976 6.68342 20.0976 6.29289 19.7071L4.29289 17.7071C3.90237 17.3166 3.90237 16.6834 4.29289 16.2929L7.56396 13.0218C7.36092 12.144 7.37061 11.2105 7.5131 10.3387C7.79184 8.63322 8.61222 6.9025 9.75736 5.75736C12.1005 3.41421 15.8995 3.41421 18.2426 5.75736C19.9889 7.50359 20.4337 10.0584 19.5772 12.2166C19.0825 11.7527 18.4829 11.3994 17.8179 11.1961C18.2473 9.82132 17.9174 8.26059 16.8284 7.17157ZM20 15.5C20 17.433 18.433 19 16.5 19C14.567 19 13 17.433 13 15.5C13 13.567 14.567 12 16.5 12C18.433 12 20 13.567 20 15.5Z" />
    </Icon>
  );
}