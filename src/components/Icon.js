// @flow
import * as React from "react";

export type Props = {
  className?: string,
  light?: boolean,
  black?: boolean,
  color?: string,
  size?: number,
  onClick?: Function,
};

type BaseProps = {
  children?: React.Node
};

function Icon({
  children,
  className,
  onClick,
  theme,
  ...rest
}: Props & BaseProps) {
  const size = rest.size ? rest.size + "px" : "24px";

  let fill = "#4E5C6E";
  if (rest.color) fill = rest.color;
  if (rest.light) fill = "#FFF";
  if (rest.black) fill = "#000";

  return (
    <svg
      fill={fill}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      {children}
    </svg>
  );
}

export default Icon;
