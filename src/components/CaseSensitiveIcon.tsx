import React from "react";
import Icon from "./Icon";
import { Props } from "./Icon";

function CaseSensitiveIcon(
  props: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.50917 5.86489C5.57673 5.3694 5.99993 5 6.5 5H9.5C10.0001 5 10.4233 5.3694 10.4908 5.86489L11.6899 14.6582L11.9889 16.6517C12.0709 17.1978 11.6945 17.707 11.1483 17.7889C10.6022 17.8709 10.093 17.4945 10.0111 16.9483L9.83881 15.8H6.16119L5.98894 16.9483C5.90701 17.4945 5.39783 17.8709 4.85166 17.7889C4.30548 17.707 3.92914 17.1978 4.01106 16.6517L4.31007 14.6583L5.50917 5.86489ZM6.44562 13.8H9.55438L8.62711 7H7.37289L6.44562 13.8Z"
      />
      <path d="M18.8558 18C18.4429 18 18.1109 17.7138 17.8596 17.4907C17.6083 17.2579 17.4603 16.928 17.4154 16.5012H17.3481C17.2224 16.9959 16.9712 17.3694 16.5942 17.6217C16.2263 17.8739 15.7731 18 15.2346 18C14.5615 18 14.0186 17.806 13.6058 17.4179C13.2019 17.0202 13 16.4672 13 15.759C13 14.9732 13.2647 14.3911 13.7942 14.0128C14.3237 13.6344 15.1 13.4452 16.1231 13.4452H17.2404V13.0669C17.2404 12.6206 17.1417 12.2859 16.9442 12.0628C16.7558 11.83 16.4327 11.7136 15.975 11.7136C15.5532 11.7136 13.5 12.0628 13.5 12.0628V10C13.5 10 15 10 16.2038 10.1419C16.2038 10.1419 17.8955 10.3796 18.425 10.855C18.9635 11.3207 19.2327 12.0288 19.2327 12.9796V16.2683H20V18H18.8558ZM15.9885 16.5885C16.3385 16.5885 16.6346 16.4963 16.8769 16.312C17.1192 16.1277 17.2404 15.8609 17.2404 15.5116V14.6094H16.1769C15.3603 14.6094 14.9519 14.9053 14.9519 15.4971V15.7881C14.9519 16.05 15.0462 16.2489 15.2346 16.3847C15.4231 16.5206 15.6744 16.5885 15.9885 16.5885Z" />
    </Icon>
  );
}

export default React.forwardRef(CaseSensitiveIcon);
