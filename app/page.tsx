"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoShapes, IoMail, IoLockClosed } from "react-icons/io5";

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-blue-100 dark:from-black dark:via-slate-950 dark:to-blue-950 p-4">
      <div className="w-full max-w-md bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-blue-500/20 dark:border-blue-500/30 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto text-3xl shadow-lg shadow-blue-500/30 text-white">
            <IoShapes />
          </div>
          <h2 className="text-2xl font-black tracking-wider text-slate-900 dark:text-white">NEBULA <span class="text-blue-500 dark:text-blue-400">ADMIN</span></h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Silahkan login ke akun administrator Anda</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">Email Address</label>
            <div className="relative flex items-center">
              <IoMail className="absolute left-4 text-slate-400 text-lg" />
              <input type="email" required defaultValue="admin@nebula.com" className="w-full bg-slate-100 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">Password</label>
            <div className="relative flex items-center">
              <IoLockClosed className="absolute left-4 text-slate-400 text-lg" />
              <input type="password" required defaultValue="password" className="w-full bg-slate-100 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500" />
            </div>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 hover:opacity-90 transition active:scale-[0.98]">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}