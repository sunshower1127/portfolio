import clsx from "clsx";
import { HTMLProps } from "react";

export default function Link({ url, className, ...props }: { url: string } & HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      href={url}
      target="_blank"
      rel=" noopener noreferrer"
      className={clsx("underline text-blue-500", className)}
      {...props}
    >
      {url}
    </a>
  );
}
