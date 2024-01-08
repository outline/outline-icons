import React from "react";
import Icon from "./Icon";
import { Props as IconProps } from "./Icon";

export type Props = IconProps & {
  expanded?: boolean;
};

function PrivateCollectionIcon(
  { expanded, ...rest }: Props,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  return (
    <Icon ref={ref} {...rest}>
      {expanded ? (
        <path d="M19,14.1000181 C18.6768901,14.0344303 18.3424658,14 18,14 C17.6575342,14 17.3231099,14.0344303 17,14.1000181 L17,5.75 C17,5.16516859 16.8928984,4.62808299 16.701875,4.16415178 L17,4.14285714 C18.1045695,4.06395932 19,5.02334914 19,6.28571429 L19,14.1000181 Z M16,14.4160437 C14.2340952,15.1876003 13,16.949681 13,19 C13,19.5211065 13.0797184,20.0235938 13.2276253,20.4959319 L7,19.3636364 C5.8954305,19.1628055 5,18.1045695 5,17 L5,7 C5,5.8954305 5.8954305,4.83719445 7,4.63636364 L14,3.36363636 C15.1045695,3.16280555 16,4.15126779 16,5.57142857 L16,14.4160437 Z M7.5,6.67532468 C7.22385763,6.71118732 7,6.97574633 7,7.26623377 L7,16.7337662 C7,17.0242537 7.22385763,17.2888127 7.5,17.3246753 L8.5,17.4545455 C8.77614237,17.4904081 9,17.272365 9,16.9675325 L9,7.03246753 C9,6.72763504 8.77614237,6.5095919 8.5,6.54545455 L7.5,6.67532468 Z M16,18 C16,16.8954305 16.8954305,16 18,16 C19.1045695,16 20,16.8954305 20,18 C20.5522847,18 21,18.4477153 21,19 L21,21 C21,21.5522847 20.5522847,22 20,22 L16,22 C15.4477153,22 15,21.5522847 15,21 L15,19 C15,18.4477153 15.4477153,18 16,18 Z M17,18 L19,18 C19,17.4477153 18.5522847,17 18,17 C17.4477153,17 17,17.4477153 17,18 Z" />
      ) : (
        <path d="M19,14.1000181 C18.6768901,14.0344303 18.3424658,14 18,14 C15.2385763,14 13,16.2385763 13,19 C13,19.3424658 13.0344303,19.6768901 13.1000181,20 L7,20 C5.8954305,20 5,19.1045695 5,18 L5,6 C5,4.8954305 5.8954305,4 7,4 L17,4 C18.1045695,4 19,4.8954305 19,6 L19,14.1000181 Z M7.5,6 C7.22385763,6 7,6.22385763 7,6.5 L7,17.5 C7,17.7761424 7.22385763,18 7.5,18 L8.5,18 C8.77614237,18 9,17.7761424 9,17.5 L9,6.5 C9,6.22385763 8.77614237,6 8.5,6 L7.5,6 Z M16,18 C16,16.8954305 16.8954305,16 18,16 C19.1045695,16 20,16.8954305 20,18 C20.5522847,18 21,18.4477153 21,19 L21,21 C21,21.5522847 20.5522847,22 20,22 L16,22 C15.4477153,22 15,21.5522847 15,21 L15,19 C15,18.4477153 15.4477153,18 16,18 Z M17,18 L19,18 C19,17.4477153 18.5522847,17 18,17 C17.4477153,17 17,17.4477153 17,18 Z" />
      )}
    </Icon>
  );
}

export default React.forwardRef(PrivateCollectionIcon);
