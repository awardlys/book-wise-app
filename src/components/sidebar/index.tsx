import { GoGraph } from "react-icons/go";
import { LuLogIn } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { LinkSidebar } from "./link-sidebar";

export function Sidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="flex flex-col justify-between h-[calc(100vh-2rem)] pt-10 pb-4 items-center dark:bg-gradient-to-tl rounded-lg dark:from-green-950 dark:via-gray-900 dark:to-purple-950 bg-gray-300">
      <div className="flex flex-col items-center justify-center gap-20">
        <Logo variant={"home"} size={30} />
        <div className="flex flex-col gap-6">
          <LinkSidebar
            to={"/home"}
            name="Início"
            current={pathname}
            icon={GoGraph}
          />
          <LinkSidebar
            to={"/explorer"}
            name="Explorer"
            current={pathname}
            icon={GoGraph}
          />
        </div>
      </div>
      <Button className="flex gap-2 items-center" variant={"ghost"}>
        <LuLogIn />
        <span>Fazer login</span>
      </Button>
    </aside>
  );
}
