import React from 'react';

interface FlightResultCardProps {
  airline: string;
  airlineCode: string;
  flightNumber: string;
  departTime: string;
  arriveTime: string;
  origin: string;
  destination: string;
  duration: string;
  nonstop?: boolean;
  price: number;
}

const FlightResultCard: React.FC<FlightResultCardProps> = ({
  airline,
  airlineCode,
  flightNumber,
  departTime,
  arriveTime,
  origin,
  destination,
  duration,
  nonstop = true,
  price,
}) => {
  return (
    <div className="mt-4 rounded-3xl bg-white shadow-md px-6 py-5 flex items-center justify-between gap-6">
      {/* Left: airline info */}
      <div className="flex items-center gap-4 min-w-[220px]">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-white text-xl">
          ✈️
        </div>
        <div>
          <p className="font-semibold text-slate-900">{airline}</p>
          <p className="text-sm text-slate-500">
            {airlineCode} {flightNumber}
          </p>
        </div>
      </div>

      {/* Middle: times and line */}
      <div className="flex-1 flex items-center justify-center gap-10">
        {/* Depart */}
        <div className="text-left">
          <p className="text-xl font-semibold text-slate-900">{departTime}</p>
          <p className="text-xs text-slate-500 mt-1">{origin}</p>
        </div>

        {/* Timeline with duration */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 w-full">
            <span className="h-px flex-1 bg-slate-200" />
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-xs text-slate-500">
              🕒
            </span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <p className="text-xs text-slate-500 mt-1">{duration}</p>
          <p className="text-xs font-semibold text-emerald-500 mt-0.5">
            {nonstop ? 'Nonstop' : '1 stop'}
          </p>
        </div>

        {/* Arrive */}
        <div className="text-right">
          <p className="text-xl font-semibold text-slate-900">{arriveTime}</p>
          <p className="text-xs text-slate-500 mt-1">{destination}</p>
        </div>
      </div>

      {/* Right: Price + Select */}
      <div className="pl-6 border-l border-slate-200 min-w-40 text-right">
        <p className="text-xs text-slate-500 mb-1">Price per person</p>
        <p className="text-2xl font-bold text-sky-500 mb-3">${price}</p>

        <button className="rounded-full bg-sky-500 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-sky-600 transition">
          Select
        </button>
      </div>
    </div>
  );
};

export default FlightResultCard;
