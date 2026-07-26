import React from "react";

function Hero({ user, resume }) {
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-8 flex justify-between items-center shadow-xl">

      <div>

        <h1 className="text-4xl font-bold text-white">
          Welcome back,
          {" "}
          {user?.name || "User"} 👋
        </h1>

        <p className="text-blue-100 mt-4 text-lg">

          {resume
            ? "Your resume has been analyzed successfully. Start your AI interview."
            : "Upload your resume to generate personalized interview questions."}

        </p>

      </div>

      <div className="w-16 h-16 rounded-full bg-white text-blue-700 flex items-center justify-center text-2xl font-bold shadow-lg">

        {initials}

      </div>

    </div>
  );
}

export default Hero;