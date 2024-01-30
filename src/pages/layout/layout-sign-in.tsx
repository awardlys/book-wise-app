import { Outlet } from "react-router-dom";

export function LayoutSignIn() {
  return (
    <div className="grid grid-cols-sign">
      <div className="">Ebook</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
