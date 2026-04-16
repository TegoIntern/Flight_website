import type { FlightOffer } from "@/lib/amadeus";

type FlightCardProps = {
  flight: FlightOffer;
};

export default function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="flex justify-between rounded bg-white p-4 shadow">
      <div>
        <p className="font-bold text-slate-900">{flight.airline}</p>
        <p className="text-slate-700">
          {flight.from} {"->"} {flight.to}
        </p>
        <p className="text-slate-600">{flight.duration}</p>
      </div>

      <div className="text-right">
        <p className="font-bold text-slate-900">${flight.price}</p>
        <button className="mt-2 rounded bg-green-600 px-3 py-1 text-white transition hover:bg-green-700">
          Select
        </button>
      </div>
    </div>
  );
}
