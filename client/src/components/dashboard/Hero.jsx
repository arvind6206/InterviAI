import React from "react";

const Hero = ({ user }) => {
  return (
    <div className="flex items-start justify-between mb-8 m-5">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Welcome back, {user?.name || "Arvind"} 👋
        </h1>

        <p className="text-slate-400 mt-2 text-lg">
          Ready for your next interview?
        </p>
      </div>

      <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white font-semibold text-lg">
        {user?.name
          ? user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()
          : "AR"}
      </div>
    </div>
  );
};

export default Hero;