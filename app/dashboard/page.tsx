"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Chart from "chart.js/auto";
import { IoCash, IoCart, IoPeople, IoAlertCircle, IoPulse, IoPieChart, IoDocumentText, IoDocumentAttach } from "react-icons/io5";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import ModalTopUp from "@/components/ModalTopUp";
import DataTable from "@/components/DataTable";

export default function DashboardPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");
  const [balance, setBalance] = useState(25750000);
  const [modalOpen, setModalOpen] = useState(false);

  const lineChartRef = useRef<HTMLCanvasElement | null>(null);
  const pieChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (activePage !== "dashboard" || !lineChartRef.current || !pieChartRef.current) return;

    const lineCtx = lineChartRef.current.getContext("2d");
    const pieCtx = pieChartRef.current.getContext("2d");

    const lineChart = new Chart(lineCtx!, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
        datasets: [{
          label: "Net Profits",
          data: [42, 59, 82, 61, 74, 95],
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.05)",
          borderWidth: 3,
          fill: true,
          tension: 0.4
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });

    const pieChart = new Chart(pieCtx!, {
      type: "doughnut",
      data: {
        labels: ["Sektor Elektronik", "F&B FMCG", "Pakaian"],
        datasets: [{
          data: [45, 35, 20],
          backgroundColor: ["#2563eb", "#06b6d4", "#8b5cf6"],
          borderWidth: 0
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });

    return () => {
      lineChart.destroy();
      pieChart.destroy();
    };
  }, [activePage]);

  return (
    <div className="flex min-h-screen relative">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} activePage={activePage} setActivePage={setActivePage} onLogout={() => router.push("/")} />
      
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        <Topbar setSidebarOpen={setSidebarOpen} activePage={activePage} balance={balance} onOpenModal={() => setModalOpen(true)} />

        <main className="flex-1 p-6 space-y-6">
          {/* CONTENT ROUTER PANELS */}
          {activePage === "dashboard" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden group shadow-sm">
                  <div className="absolute -right-4 -bottom-4 text-blue-500/10 text-8xl group-hover:scale-110 transition-transform duration-300 flex"><IoCash /></div>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase">Omzet Bulan Ini</p>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mt-2">Rp 89.400.000</h3>
                </div>
                <div className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden group shadow-sm">
                  <div className="absolute -right-4 -bottom-4 text-purple-500/10 text-8xl group-hover:scale-110 transition-transform duration-300 flex"><IoCart /></div>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase">Transaksi Sukses</p>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mt-2">1,420 Invoice</h3>
                </div>
                <div className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden group shadow-sm">
                  <div className="absolute -right-4 -bottom-4 text-cyan-500/10 text-8xl group-hover:scale-110 transition-transform duration-300 flex"><IoPeople /></div>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase">Pelanggan Aktif</p>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mt-2">842 Member</h3>
                </div>
                <div className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden group shadow-sm">
                  <div className="absolute -right-4 -bottom-4 text-amber-500/10 text-8xl group-hover:scale-110 transition-transform duration-300 flex"><IoAlertCircle /></div>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase">Kehabisan Stok</p>
                  <h3 className="text-xl font-black text-amber-600 dark:text-amber-400 mt-2">3 Produk</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 lg:col-span-2 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><IoPulse className="text-blue-500" /> Alur Grafik Keuntungan Finansial</h4>
                  <div className="h-64"><canvas ref={lineChartRef}></canvas></div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2"><IoPieChart className="text-blue-500" /> Distribusi Produk</h4>
                  <div className="h-64 flex items-center justify-center"><canvas ref={pieChartRef}></canvas></div>
                </div>
              </div>
            </div>
          )}

          {activePage === "barang" && (
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <DataTable 
                columns={["ID SKU", "Item Nama", "Sub-Kategori", "Stock Gudang", "Unit Harga Value"]} 
                data={[
                  ["SKU-091", "Kopi Robusta Beans 1Kg", "F&B FMCG", "42 Pack", "Rp 120.000"],
                  ["SKU-202", "Mechanical Keyboard Wireless", "Elektronik", "15 Unit", "Rp 850.000"],
                  ["SKU-441", "Jaket Varsity Dark Obsidian", "Pakaian", "8 Pcs", "Rp 320.000"]
                ]} 
              />
            </div>
          )}

          {activePage === "penjualan" && (
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <DataTable 
                columns={["No Invoice", "Nama Pembeli", "Metode", "Total Bayar", "Status Flag"]} 
                data={[
                  ["INV-88221", "Alif Wijaya", "QRIS", "Rp 120.000", "SUCCESS"],
                  ["INV-88222", "Rina Lestari", "Bank VA", "Rp 850.000", "SUCCESS"],
                  ["INV-88223", "Denny Setiawan", "E-Wallet", "Rp 320.000", "PENDING"]
                ]} 
              />
            </div>
          )}

          {activePage === "customer" && (
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <DataTable 
                columns={["Nama Member", "Kontak Email", "Loyalty Point Tier"]} 
                data={[
                  ["Alif Wijaya", "alif.wijaya@gmail.com", "Gold Tier VIP"],
                  ["Rina Lestari", "rina.l@yahoo.co.id", "Platinum Tier Premium"],
                  ["Denny Setiawan", "denny12@outlook.com", "Silver Base Tier"]
                ]} 
              />
            </div>
          )}

          {activePage === "laporan" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-500/10 text-rose-500 rounded-xl flex items-center justify-center text-xl"><IoDocumentText /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-sm">Laporan Bulanan Akuntansi</h4>
                    <p className="text-xs text-slate-400 dark:text-slate-500">Periode Audit Transaksi Komprehensif (.PDF)</p>
                  </div>
                </div>
                <button className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-rose-600 dark:hover:bg-rose-600 text-slate-700 dark:text-white font-bold py-2.5 rounded-xl text-xs transition">Unduh PDF</button>
              </div>
              <div className="bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center text-xl"><IoDocumentAttach /></div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-sm">Spreadsheet Rekap Barang</h4>
                    <p className="text-xs text-slate-400 dark:text-slate-500">Manifestasi Logistik Ekspor Sektoral (.XLSX)</p>
                  </div>
                </div>
                <button className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-slate-700 dark:text-white font-bold py-2.5 rounded-xl text-xs transition">Ekspor Excel</button>
              </div>
            </div>
          )}
        </main>
      </div>

      <ModalTopUp isOpen={modalOpen} onClose={() => setModalOpen(false)} onConfirm={(amt) => setBalance(prev => prev + amt)} />
    </div>
  );
}