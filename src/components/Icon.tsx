import * as React from "react";

export type Props = {
  className?: string;
  color?: string;
  size?: number;
  onClick?: (ev: React.MouseEvent<SVGElement>) => void;
  theme?: Record<string, any>;
};

type BaseProps = {
  children?: React.ReactNode;
};

function Icon({
  children,
  className,
  onClick,
  theme,
  color = "currentColor",
  ...rest
}: Props & BaseProps): React.ReactElement<React.ComponentProps<any>, any> {
  const size = rest.size ? rest.size + "px" : "24px";

  return (
    <svg
      fill={color}
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
