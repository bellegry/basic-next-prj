const API_KEY = process.env.NEXT_PUBLIC_SEOUL_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_SEOUL_API_URL;

// 몇호선
export async function getRealTimePosition(line: string) {
  const res = await fetch(`${BASE_URL}/${API_KEY}/json/realtimePostion/0/50/${line}`);

  if (!res.ok) throw new Error("API ERROR");

  return res.json();
}

// 역이름
export async function getRealTimeArrival(station: string) {
  const res = await fetch(`${BASE_URL}/${API_KEY}/json/realtimeStationArrival/0/20/${station}`);

  if (!res.ok) throw new Error("API ERROR");

  return res.json();
}
