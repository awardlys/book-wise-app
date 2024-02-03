import { Sidebar } from "@/components/sidebar";
import { Outlet } from "react-router-dom";

export function LayoutHome() {
  return (
    <div className="grid grid-cols-app gap-4 p-4 justify-center">
      <Sidebar />
      <div className="py-10">
        <Outlet />
      </div>
      <div>Rivaldo</div>
    </div>
  );
}
