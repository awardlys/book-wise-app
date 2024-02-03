import logo from "@/assets/logo-book.svg";
import { GoGraph } from "react-icons/go";

export function Sidebar() {
  return (
    <aside className="flex flex-col items-center bg-gradient-to-tl rounded-lg from-green-950 via-gray-900 to-purple-950">
      <div className="flex gap-2 mt-8 mb-14">
        <img src={logo} alt="Icone com um coração!" className="h-6 w-6" />
        <span className="text-xl font-bold text-logo">BookWise</span>
      </div>
      <div className="flex items-center gap-2">
        <div className=" flex gap-2 items-center">
          <div className="bg-gradient-to-br from-green-300 to-violet-500 h-6 w-[2px] rounded-lg" />
          <GoGraph className="h-4 w-4 fill-accent-foreground" />
          <h2 className="text-lg">Início</h2>
        </div>
      </div>
    </aside>
  );
}
