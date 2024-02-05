import logo from "@/assets/logo-book.svg";
import { GoGraph } from "react-icons/go";
import { LuLogIn } from "react-icons/lu";
import { Button } from "./ui/button";

export function Sidebar() {
  return (
    <aside className="flex flex-col justify-between pt-10 pb-4 items-center dark:bg-gradient-to-tl rounded-lg dark:from-green-950 dark:via-gray-900 dark:to-purple-950 bg-gradient-to-tr from-green-500 via-gray-500 to-purple-700">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex gap-2">
          <img src={logo} alt="Icone com um coração!" className="h-6 w-6" />
          <span className="text-xl font-bold text-logo">BookWise</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-br from-green-300 to-violet-500 h-6 w-[2px] rounded-lg" />
            <GoGraph className="h-4 w-4 fill-accent-foreground" />
            <h2 className="text-lg text-accent-foreground">Início</h2>
          </div>
        </div>
      </div>
      <Button  className="flex gap-2 items-center" variant={"ghost"} >
       <LuLogIn/> Fazer login
      </Button>
    </aside>
  );
}
