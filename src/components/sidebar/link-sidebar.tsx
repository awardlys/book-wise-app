import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

interface LinkSidebarProps extends LinkProps {
  current?: string;
  name: string;
  icon?: ReactNode;
}
export function LinkSidebar({
  name,
  current,
  ...props
}: Readonly<LinkSidebarProps>) {
  return (
    <Link {...props}>
      <div className="flex gap-2 items-center">
        <div
          className={`${
            current === props.to && "bg-gradient-to-br"
          } from-green-300 to-violet-500 h-6 w-[2px] rounded-lg`}
        />
        {props.icon}
        <h2 className="text-lg text-accent-foreground">{name}</h2>
      </div>
    </Link>
  );
}
LinkSidebar.displayName = "Sidebar";
