import { useState } from 'react';

export default function SearchFlights() {
  const [activeTab, setActiveTab] = useState<'route' | 'flightNumber'>('route');

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-sky-400 via-sky-500 to-sky-600 px-4 py-10">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-white">
          <div className="flex items-center gap-2 text-3xl font-semibold">
            <span className="text-3xl">✈️</span>
            <h1>Flight Search</h1>
          </div>
          <p className="mt-2 text-sm md:text-base text-sky-100">
            Find and book your perfect flight
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          <button
            type="button"
            className={`rounded-full px-6 py-2 text-sm font-medium shadow-md transition 
              ${
                activeTab === 'route'
                  ? 'bg-white text-sky-600'
                  : 'bg-sky-500/40 text-sky-100 border border-sky-400/50'
              }`}
            onClick={() => setActiveTab('route')}
          >
            Route Search
          </button>
          <button
            type="button"
            className={`rounded-full px-6 py-2 text-sm font-medium shadow-md transition 
              ${
                activeTab === 'flightNumber'
                  ? 'bg-white text-sky-600'
                  : 'bg-sky-500/40 text-sky-100 border border-sky-400/50'
              }`}
            onClick={() => setActiveTab('flightNumber')}
          >
            Flight Number
          </button>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl bg-white shadow-xl px-6 py-6 md:px-10 md:py-8 space-y-6">
          <div className={activeTab === 'route' ? 'grid gap-6 md:grid-cols-2' : 'hidden'}>
            {/* From */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-xs">
                  ●
                </span>
                From
              </label>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 transition focus-within:ring-2 focus-within:ring-sky-200 focus-within:border-sky-400 focus-within:bg-white">
                <input
                  type="text"
                  placeholder="e.g., LAX, New York"
                  className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none"
                />
              </div>
            </div>

            {/* To */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-xs">
                  📍
                </span>
                To
              </label>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 transition focus-within:ring-2 focus-within:ring-sky-200 focus-within:border-sky-400 focus-within:bg-white">
                <input
                  type="text"
                  placeholder="e.g., JFK, Los Angeles"
                  className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Flight Number input (shown only when flightNumber tab is active) */}
          <div className={activeTab === 'flightNumber' ? 'block' : 'hidden'}>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-xs">
                #️⃣
              </span>
              Flight Number
            </label>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 transition focus-within:ring-2 focus-within:ring-sky-200 focus-within:border-sky-400 focus-within:bg-white">
              <input
                type="text"
                placeholder="e.g., UA123"
                autoFocus={false}
                className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-sky-500/40 transition"
          >
            <span className="text-base">🔍</span>
            <span>Search Flights</span>
          </button>
        </div>
      </div>
    </div>
  );
}
