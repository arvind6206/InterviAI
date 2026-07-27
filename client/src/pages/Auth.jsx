import { useState } from "react";
import DemoTranscript from "./DemoTranscript.jsx";
import api from "../api/axios.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const isSignup = mode === "signup";

  const navigate = useNavigate()

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  function handleChange(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (isSignup) {
        const response = await api.post("/user/signup", {
          name: form.name,
          email: form.email,
          password: form.password,
        });

        toast.success(response.data.message);

        setForm({
          name: "",
          email: "",
          password: "",
        });

        setMode("login");
      } else {
        const response = await api.post("/user/login", {
          email: form.email,
          password: form.password,
        })
        toast.success(response.data.message)

      //save jwt
      localStorage.setItem("token", response.data.token)

        navigate("/dashboard")
      
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <div className="min-h-screen w-full flex bg-ink text-white font-sans">
      {/* LEFT: FORM */}
      <div className="flex-1 flex flex-col justify-center px-16 py-12 max-w-[560px]">
        <div className="flex items-center gap-2.5 mb-14">
          <div className="w-7 h-7 rounded-[7px] bg-amber flex items-center justify-center text-[#231603] font-bold text-[15px]">
            I
          </div>
          <div className="font-semibold text-base tracking-wide">InterviAI</div>
        </div>

        <h1 className="font-semibold text-3xl leading-tight mb-2">
          {isSignup ? "Create your account" : "Welcome back"}
        </h1>
        <p className="text-muted text-[15px] leading-relaxed mb-9">
          {isSignup
            ? "Start practicing with a mock interviewer built around the role you want."
            : "Pick up your mock interview practice where you left off."}
        </p>

        <div className="flex bg-surface border border-border rounded-[10px] p-1 mb-8 w-fit">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={
              "px-5 py-2 text-sm font-medium rounded-[7px] transition-colors " +
              (!isSignup ? "bg-surface-2 text-white" : "text-muted")
            }
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => setMode("signup")}
            className={
              "px-5 py-2 text-sm font-medium rounded-[7px] transition-colors " +
              (isSignup ? "bg-surface-2 text-white" : "text-muted")
            }
          >
            Sign up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {isSignup && (
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-[13px] text-muted font-medium"
              >
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={handleChange("name")}
                className="bg-surface border border-border rounded-[10px] px-3.5 py-3 text-sm text-white placeholder:text-muted/60 outline-none focus:border-amber focus:ring-4 focus:ring-amber/[0.14] transition"
              />
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-[13px] text-muted font-medium"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              value={form.email}
              onChange={handleChange("email")}
              className="bg-surface border border-border rounded-[10px] px-3.5 py-3 text-sm text-white placeholder:text-muted/60 outline-none focus:border-amber focus:ring-4 focus:ring-amber/[0.14] transition"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="text-[13px] text-muted font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange("password")}
              className="bg-surface border border-border rounded-[10px] px-3.5 py-3 text-sm text-white placeholder:text-muted/60 outline-none focus:border-amber focus:ring-4 focus:ring-amber/[0.14] transition"
            />
          </div>

          {!isSignup && (
            <div className="flex justify-between items-center text-[13px]">
              <label className="flex items-center gap-2 text-muted">
                <input type="checkbox" className="accent-amber w-3.5 h-3.5" />
                Stay signed in
              </label>
              <a href="#" className="text-violet font-medium hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="mt-2 bg-amber text-[#231603] rounded-[10px] px-4.5 py-3.5 font-semibold text-sm hover:brightness-105 active:scale-[0.98] transition"
          >
            {isSignup ? "Create account" : "Log in"}
          </button>
        </form>

        <div className="flex items-center gap-3 text-muted text-xs my-6">
          <span className="flex-1 h-px bg-border" />
          or continue with
          <span className="flex-1 h-px bg-border" />
        </div>

        <div className="flex gap-2.5">
          <button className="flex-1 bg-surface border border-border rounded-[10px] py-2.5 text-[13px] font-medium hover:bg-surface-2 transition">
            Google
          </button>
          <button className="flex-1 bg-surface border border-border rounded-[10px] py-2.5 text-[13px] font-medium hover:bg-surface-2 transition">
            GitHub
          </button>
        </div>

        <p className="text-center text-muted text-[13px] mt-7">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="text-violet font-medium hover:underline"
              >
                Log in
              </button>
            </>
          ) : (
            <>
              New to Prepline?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="text-violet font-medium hover:underline"
              >
                Create an account
              </button>
            </>
          )}
        </p>
      </div>

      {/* RIGHT: LIVE DEMO */}
      <div className="hidden lg:flex flex-1 bg-surface border-l border-border flex-col justify-center px-16 py-12">
        <div className="font-mono text-[11px] tracking-[1.5px] uppercase text-violet mb-4">
          Live practice session
        </div>
        <h2 className="font-semibold text-[22px] leading-snug max-w-[460px] mb-10">
          Rehearse the questions that actually get asked — with an AI
          interviewer that adapts to your answers.
        </h2>

        <DemoTranscript />

        <div className="flex gap-7 mt-8">
          <div>
            <div className="font-semibold text-[22px]">12,400+</div>
            <div className="text-xs text-muted mt-0.5">mock interviews run</div>
          </div>
          <div>
            <div className="font-semibold text-[22px]">4.8/5</div>
            <div className="text-xs text-muted mt-0.5">
              average feedback score
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
