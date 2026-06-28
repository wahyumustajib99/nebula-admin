"use client";
import React from "react";
import { IoShapes, IoClose, IoGrid, IoCube, IoReceipt, IoPeople, IoAnalytics, IoLogOut } from "react-icons/io5";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activePage: string;
  setActivePage: (page: string) => void;
  onLogout: () => void;
}

export default function Sidebar({ isOpen, setIsOpen, activePage, setActivePage, onLogout }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <IoGrid /> },
    { id: "barang", label: "Data Barang", icon: <IoCube /> },
    { id: "penjualan", label: "Data Penjualan", icon: <IoReceipt /> },
    { id: "customer", label: "Data Customer", icon: <IoPeople /> },
    { id: "laporan", label: "Laporan", icon: <IoAnalytics /> },
  ];

  return (
    <>
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col`}>
        <div className="h-16 flex items-center justify-between px-6 bg-slate-50 dark:bg-slate-950/40 border-b border-slate-200 dark:border-slate-800/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center text-white">
              <IoShapes />
            </div>
            <span className="font-black text-slate-900 dark:text-white tracking-wider text-base">NEBULA<span className="text-blue-500 dark:text-blue-400">CORE</span></span>
          </div>
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-slate-500 hover:text-slate-800 dark:hover:text-white">
            <IoClose className="text-2xl" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActivePage(item.id); if (window.innerWidth < 1024) setIsOpen(false); }}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all ${
                activePage === item.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                  : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 bg-slate-50 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white">JD</div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">John Doe</p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium tracking-wide uppercase">Owner</p>
            </div>
          </div>
          <button onClick={onLogout} className="text-slate-400 hover:text-rose-500 transition text-xl flex items-center">
            <IoLogOut />
          </button>
        </div>
      </aside>
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden" />}
    </>
  );
}