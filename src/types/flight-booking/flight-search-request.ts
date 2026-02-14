export type FlightSearchRequest = {
  type: "round-trip" | "one-way";
  from: string;
  to: string;
  departure_date: string;
  passengers: number;
};