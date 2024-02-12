import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Outlet } from "react-router-dom";

export function LayoutSignIn() {
  return (
    <>
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="grid grid-cols-sign gap-4 p-4 h-screen select-none">
        <div className="flex justify-center items-center rounded-md dark:bg-gradient-to-r dark:from-violet-950 dark:to-slate-900">
          <div className="bg-sign w-full h-full bg-center rounded-sm bg-cover backdrop-blur-blur dark:opacity-10 opacity-30" />
          <Logo variant={"sign"} />
        </div>
        <div className="flex flex-col gap-12 justify-center items-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}
