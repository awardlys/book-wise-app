import { GoGraph } from "react-icons/go";
import { LuLogIn } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { LinkSidebar } from "./link-sidebar";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function Sidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="flex flex-col justify-between h-[95vh] pt-10 pb-4 items-center dark:bg-gradient-to-tl rounded-lg dark:from-green-950 dark:via-gray-900 dark:to-purple-950 bg-gradient-to-tr from-green-500 via-gray-500 to-purple-700">
      <div className="flex flex-col items-center justify-center gap-20">
        <Logo variant={"home"} size={30} />
        <div className="flex flex-col gap-6">
          <LinkSidebar
            to={"/home"}
            name="Início"
            current={pathname}
            icon={<GoGraph className="h-4 w-4 fill-accent-foreground" />}
          />
          <LinkSidebar
            to={"/explorer"}
            name="Explorer"
            current={pathname}
            icon={<GoGraph className="h-4 w-4 fill-accent-foreground" />}
          />
        </div>
      </div>
      <Button className="flex gap-2 items-center" variant={"ghost"}>
        <LuLogIn />
        <span> Fazer login</span>
      </Button>
    </aside>
  );
}
