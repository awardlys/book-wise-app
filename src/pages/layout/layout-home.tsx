import { Outlet } from "react-router-dom";

export function LayoutHome() {
  return (
    <div className="grid grid-cols-app">
      <div className="">Ebook</div>
      <div>
        <Outlet />
      </div>
      <div>Rivaldo</div>
    </div>
  );
}
