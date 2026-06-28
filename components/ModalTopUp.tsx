"use client";
import React, { useState } from "react";
import { IoWallet, IoClose } from "react-icons/io5";

interface ModalTopUpProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (amount: number) => void;
}

export default function ModalTopUp({ isOpen, onClose, onConfirm }: ModalTopUpProps) {
  const [amount, setAmount] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(Number(amount));
    setAmount("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <IoWallet className="text-emerald-500" /> Form Top Up Saldo
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-xl flex"><IoClose /></button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">Nominal Pengisian (Rp)</label>
            <input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Contoh: 500000" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">Metode Pembayaran</label>
            <select className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500">
              <option>Transfer Bank Virtual Account</option>
              <option>Instant QRIS Code</option>
              <option>E-Wallet (OVO / Dana / GoPay)</option>
            </select>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold py-2.5 rounded-xl transition text-xs">Batal</button>
            <button type="submit" className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold py-2.5 rounded-xl text-xs">Konfirmasi Topup</button>
          </div>
        </form>
      </div>
    </div>
  );
}