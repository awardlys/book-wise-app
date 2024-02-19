import { ElementType } from "react";
import { Link, LinkProps } from "react-router-dom";

interface LinkSidebarProps extends LinkProps {
  current?: string;
  name: string;
  icon: ElementType;
}
export function LinkSidebar({
  name,
  current,
  icon: Icon,
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
        <Icon className="h-4 w-4 fill-accent-foreground" />
        <h2 className="text-lg text-accent-foreground">{name}</h2>
      </div>
    </Link>
  );
}
LinkSidebar.displayName = "Sidebar";
