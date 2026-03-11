const API_KEY = process.env.NEXT_PUBLIC_SEOUL_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_SEOUL_API_URL;

export async function getRealTimePosition(line: string) {
  const res = await fetch(`${BASE_URL}/${API_KEY}/realtimePostion/0/50/${line}`);

  if (!res.ok) throw new Error("API ERROR");

  return res.json();
}

export async function getRealTimeArrival(statin: string) {
  const res = await fetch(`${BASE_URL}/${API_KEY}/realtimeStationArrival/0/20/${statin}`);

  if (!res.ok) throw new Error("API ERROR");

  return res.json();
}
