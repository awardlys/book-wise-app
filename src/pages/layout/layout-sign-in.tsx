import logo from "@/assets/logo-book.svg";
import { Outlet } from "react-router-dom";

export function LayoutSignIn() {
  return (
    <div className="grid grid-cols-sign p-4 h-screen">
      <div className="flex justify-center items-center rounded-md bg-gradient-to-r from-violet-950 to-slate-900">
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "url('/src/assets/logo.png') no-repeat center / cover",
            backdropFilter: "blur(1px)",
            opacity: 0.1,
          }}
        />
        <div className="flex absolute gap-4 items-center justify-center">
          <img src={logo} alt="Icone com um coração!" />
          <span
            className="text-4xl font-bold"
            style={{
              background:
                "var(--Gradient-Horizontal, linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BookWise
          </span>
        </div>
      </div>
      <div className="p-2">
        <Outlet />
      </div>
    </div>
  );
}
