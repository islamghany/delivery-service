import clsx from "clsx";
import React from "react";

export function Text({
  className,
  children,
  ...rest
}: {
  className?: String;
  children: React.ReactNode | string;
  onClick?: () => void;
}) {
  return (
    <p {...rest} className={clsx("text-slate-600", className)}>
      {children}
    </p>
  );
}
