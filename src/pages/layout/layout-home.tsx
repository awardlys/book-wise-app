import { ModeToggle } from "@/components/mode-toggle";
import { Sidebar } from "@/components/sidebar";
import { Outlet } from "react-router-dom";

export function LayoutHome() {
  return (
    <div className="grid grid-cols-app gap-24 p-4 justify-center">
      <Sidebar />
      <Outlet />
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
    </div>
  );
}
