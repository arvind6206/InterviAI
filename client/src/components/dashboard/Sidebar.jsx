import React from "react";
import { LayoutDashboard } from "lucide-react";
import { FileUser } from "lucide-react";
import { Mic } from "lucide-react";
import { Settings } from "lucide-react";
import { SignalMedium } from "lucide-react";

function Sidebar() {
  return (
    <div className="min-h-screen max-w-60 bg-[#1c1c1c] p-5">
      <div className="">
        <h2 className="font-semibold text-md">InterviAI</h2>
      </div>
      <div className="mt-5 cursor-pointer">
        <div className="flex items-center gap-2 hover:bg-blue-800 h-9 w-50 p-1 rounded-md">
          <LayoutDashboard size={20} />
          <h3>Dashboard</h3>
        </div>
        <div className="flex items-center gap-2 mt-2 hover:bg-blue-800 h-9 w-50 p-1 rounded-md">
          <FileUser size={20} />
          <h3>Resume</h3>
        </div>
        <div className="flex items-center gap-2 mt-2 hover:bg-blue-800 h-9 w-50 p-1 rounded-md">
          <Mic size={20} />
          <h3>Interviews</h3>
        </div>
        <div className="flex items-center gap-2 mt-2 hover:bg-blue-800 h-9 w-50 p-1 rounded-md">
          <SignalMedium size={20} />
          <h3>Reports</h3>
        </div>
        <div className="flex items-center gap-2 mt-2 hover:bg-blue-800 h-9 w-50 p-1 rounded-md">
          <Settings size={20} />
          <h3>Settings</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
