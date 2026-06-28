"use client";
import React, { useState, useEffect } from "react";
import { IoMenu, IoSunny, IoMoon, IoWallet } from "react-icons/io5";

interface TopbarProps {
  setSidebarOpen: (open: boolean) => void;
  activePage: string;
  balance: number;
  onOpenModal: () => void;
}

export default function Topbar({ setSidebarOpen, activePage, balance, onOpenModal }: TopbarProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [isDark]);

  return (
    <header className="h-16 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-30 transition-colors duration-300">
      <div className="flex items-center gap-4">
        <button onClick={() => setSidebarOpen(true)} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center">
          <IoMenu className="text-2xl" />
        </button>
        <h1 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide capitalize">{activePage}</h1>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => setIsDark(!isDark)} className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-amber-400 flex items-center justify-center hover:scale-105 transition active:scale-95 text-xl">
          {isDark ? <IoMoon /> : <IoSunny />}
        </button>

        <button onClick={onOpenModal} className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold text-xs px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 hover:opacity-90 transition">
          <IoWallet className="text-base" /> Top Up Saldo
        </button>
        <hr className="w-px h-6 bg-slate-200 dark:bg-slate-800" />
        <div className="text-right hidden sm:block">
          <p className="text-xs text-slate-400 dark:text-slate-500">Saldo System</p>
          <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Rp {balance.toLocaleString("id-ID")}</p>
        </div>
      </div>
    </header>
  );
}