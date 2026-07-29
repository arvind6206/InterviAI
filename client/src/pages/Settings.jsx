import React, { useEffect, useState } from "react";
import Sidebar from "../components/dashboard/Sidebar.jsx";
import api from "../api/axios";
import { User, Bell, Shield, LogOut } from "lucide-react";

function Settings() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get("/user/profile", {
        headers: { token },
      });
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  if (loading) {
    return (
      <div className="flex min-h-screen bg-[#000E24]">
        <Sidebar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#000E24]">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">
            Settings
          </h1>
          <p className="text-slate-400 mb-10">
            Manage your account settings and preferences
          </p>

          {/* Profile Section */}
          <div className="bg-[#111827] border border-slate-700 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <User className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  Profile Information
                </h2>
                <p className="text-slate-400 text-sm">
                  Update your personal details
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-slate-300 text-sm mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  value={user?.name || ""}
                  disabled
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="text-slate-300 text-sm mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500 disabled:opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="bg-[#111827] border border-slate-700 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <Bell className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  Notifications
                </h2>
                <p className="text-slate-400 text-sm">
                  Manage your notification preferences
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">
                    Email Notifications
                  </p>
                  <p className="text-slate-400 text-sm">
                    Receive interview reminders via email
                  </p>
                </div>
                <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">
                    Interview Reminders
                  </p>
                  <p className="text-slate-400 text-sm">
                    Get notified about scheduled interviews
                  </p>
                </div>
                <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="bg-[#111827] border border-slate-700 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  Security
                </h2>
                <p className="text-slate-400 text-sm">
                  Manage your account security
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-slate-800 hover:bg-slate-700 transition px-4 py-3 rounded-xl text-white text-left flex items-center justify-between">
                <span>Change Password</span>
                <span className="text-slate-400">→</span>
              </button>
              <button className="w-full bg-slate-800 hover:bg-slate-700 transition px-4 py-3 rounded-xl text-white text-left flex items-center justify-between">
                <span>Two-Factor Authentication</span>
                <span className="text-slate-400">→</span>
              </button>
            </div>
          </div>

          {/* Logout Section */}
          <div className="bg-[#111827] border border-slate-700 rounded-2xl p-6">
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-700 transition px-4 py-3 rounded-xl text-white font-medium flex items-center justify-center gap-2"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;
