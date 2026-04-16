"use client";

type SearchBarProps = {
  from: string;
  to: string;
  onFromChange: (value: string) => void;
  onToChange: (value: string) => void;
  onSearch: () => void;
};

export default function SearchBar({
  from,
  to,
  onFromChange,
  onToChange,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
        <input
          value={from}
          onChange={(event) => onFromChange(event.target.value)}
          placeholder="From"
          className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-blue-700"
        />
        <input
          value={to}
          onChange={(event) => onToChange(event.target.value)}
          placeholder="To"
          className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-blue-700"
        />
        <button
          type="button"
          onClick={onSearch}
          className="rounded-2xl bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Search Flights
        </button>
      </div>
    </div>
  );
}
