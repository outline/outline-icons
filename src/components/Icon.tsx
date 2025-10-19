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

function Icon(
  { children, theme, color = "currentColor", size, ...rest }: Props & BaseProps,
  ref: React.ForwardedRef<SVGSVGElement>
): React.ReactElement<React.ComponentProps<any>, any> {
  const s = size ? size + "px" : "24px";

  return (
    <svg
      fill={color}
      width={s}
      height={s}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...rest}
    >
      {children}
    </svg>
  );
}

export default React.forwardRef(Icon);
