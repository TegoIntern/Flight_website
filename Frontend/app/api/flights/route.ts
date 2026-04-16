import { NextResponse } from "next/server";
import { searchFlights } from "@/lib/amadeus";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const from = searchParams.get("from") ?? "";
  const to = searchParams.get("to") ?? "";

  const flights = await searchFlights({ from, to });

  return NextResponse.json(flights);
}
