"use client";

import LiveMetrics from "@/components/ui/livemetrics";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gray-50 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Panel - Input Parameters */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Input Parameters</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-medium">Exchange</label>
              <select className="w-full p-2 border rounded-md">
                <option>OKX</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Spot Asset</label>
              <input type="text" placeholder="e.g., BTC/USDT" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block font-medium">Order Type</label>
              <select className="w-full p-2 border rounded-md">
                <option>Market</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Quantity (USD)</label>
              <input type="number" placeholder="e.g., 100" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block font-medium">Volatility</label>
              <input type="number" step="0.01" placeholder="e.g., 0.05" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block font-medium">Fee Tier</label>
              <input type="text" placeholder="e.g., Tier 1" className="w-full p-2 border rounded-md" />
            </div>
          </form>
        </div>

        {/* Right Panel - Output Parameters */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Output Parameters</h2>
          <LiveMetrics />
        </div>
      </div>
    </main>
  );
}
