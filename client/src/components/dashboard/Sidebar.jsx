import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileUser,
  Mic,
  SignalMedium,
  Settings,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      title: "Resume",
      icon: <FileUser size={20} />,
      path: "/resume",
    },
    {
      title: "Interviews",
      icon: <Mic size={20} />,
      path: "/interview",
    },
    {
      title: "Reports",
      icon: <SignalMedium size={20} />,
      path: "/report",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/settings",
    },
  ];

  return (
    <aside className="min-h-screen w-64 bg-[#111827] border-r border-slate-700 p-6">

      {/* Logo */}

      <div className="mb-10">
        <h1 className="text-2xl font-bold text-white">
          InterviAI
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          AI Interview Platform
        </p>
      </div>

      {/* Navigation */}

      <nav className="space-y-3">

        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            {item.icon}

            <span className="font-medium">
              {item.title}
            </span>
          </NavLink>
        ))}

      </nav>

      {/* Footer */}

      <div className="absolute bottom-6 left-6 right-6">

        <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">

          <h3 className="text-white font-semibold">
            InterviAI
          </h3>

          <p className="text-slate-400 text-xs mt-1">
            Practice smarter with AI-powered interviews.
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;