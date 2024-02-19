import { ReactNode } from "react";

interface CommentRootProps {
  children: ReactNode;
}

export function CommentRoot({ children }: Readonly<CommentRootProps>) {
  return (
    <div className="flex flex-col w-full dark:bg-muted bg-gray-300 p-4 rounded-md gap-4 group">
      {children}
    </div>
  );
}
