import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CommentRootProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export function CommentRoot({
  children,
  className,
  ...props
}: Readonly<CommentRootProps>) {
  return (
    <div
      className={twMerge(
        "flex flex-col w-full dark:bg-muted bg-gray-300 p-4 rounded-md gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
