"use client";
import React, { useState } from "react";

interface DataTableProps {
  columns: string[];
  data: string[][];
}

export default function DataTable({ columns, data }: DataTableProps) {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((row) =>
    row.some((cell) => cell.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <input
          type="text"
          placeholder="Cari data..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl text-sm focus:outline-none focus:border-blue-500 w-full sm:w-64"
        />
      </div>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
          <thead className="text-xs text-slate-700 uppercase bg-slate-100 dark:bg-slate-950 dark:text-slate-300">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-6 py-4 font-bold tracking-wider">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {filteredData.map((row, rIdx) => (
              <tr key={rIdx} className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="px-6 py-4 whitespace-nowrap text-slate-900 dark:text-slate-300">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}