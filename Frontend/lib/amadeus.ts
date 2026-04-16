export type FlightSearchParams = {
  from: string;
  to: string;
};

export type FlightOffer = {
  id: string;
  airline: string;
  from: string;
  to: string;
  duration: string;
  price: number;
};

export async function searchFlights({
  from,
  to,
}: FlightSearchParams): Promise<FlightOffer[]> {
  const origin = from.trim() || "ORD";
  const destination = to.trim() || "LAX";

  return [
    {
      id: "offer-1",
      airline: "United Airlines",
      from: origin,
      to: destination,
      duration: "3h 25m",
      price: 420,
    },
    {
      id: "offer-2",
      airline: "American Airlines",
      from: origin,
      to: destination,
      duration: "4h 05m",
      price: 560,
    },
  ];
}
