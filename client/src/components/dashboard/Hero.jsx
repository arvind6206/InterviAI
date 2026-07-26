import React from "react";

const Hero = ({ user }) => {
    const initials = user?.name
        ? user.name
            .split(" ")
            .map(word => word[0])
            .join("")
            .toUpperCase()
            : "U";
  return (
    <div className="flex items-start justify-between mb-8 m-5">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Welcome back, {user?.name || "User"} 👋
        </h1>

        <p className="text-slate-400 mt-2 text-lg">
          Ready for your next interview?
        </p>
      </div>

      <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white font-semibold text-lg">
        {initials}
      </div>
    </div>
  );
};

export default Hero;