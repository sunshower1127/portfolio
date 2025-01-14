import clsx from "clsx";
import { icons } from "lucide-react";
import { HTMLAttributes } from "react";

export interface LucideIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  name: keyof typeof icons;
  size?: number;
  fill?: string;
  strokeWidth?: number;
}

export default function Icon({ name, className, strokeWidth = 1, ...props }: LucideIconProps) {
  const SelectLucideIcon = icons[name];

  const isClickEvent = !!props.onClick;
  const pointerStyle = isClickEvent ? "cursor-pointer" : "";

  return <SelectLucideIcon strokeWidth={strokeWidth} className={clsx(pointerStyle, className)} {...props} />;
}
