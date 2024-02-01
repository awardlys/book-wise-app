import { Outlet } from "react-router-dom";

export function LayoutHome() {
  return (
    <div className="grid grid-cols-app p-4">
      <div className="">Ebook</div>
      <div className="py-10">
        <Outlet />
      </div>
      <div>Rivaldo</div>
    </div>
  );
}
