const API_KEY = process.env.NEXT_PUBLIC_SEOUL_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_SEOUL_API_URL;

// 실시간 지하철 위치
export async function getRealTimePosition(line: string) {
  const res = await fetch(`${BASE_URL}/${API_KEY}/json/realtimePosition/0/50/${line}`);

  if (!res.ok) throw new Error("API ERROR");

  return res.json();
}

// 실시간 지하철 도착 정보
export async function getRealTimeArrival(station: string) {
  const res = await fetch(`${BASE_URL}/${API_KEY}/json/realtimeStationArrival/0/20/${station}`);

  if (!res.ok) throw new Error("API ERROR");

  return res.json();
}

// // 호선별 지하철역 정보
// export async function getSubwayStations(subwayLine: string) {
//   const res = await fetch(`${BASE_URL}/${API_KEY}/json/SearchSTNBySubwayLineInfo/1/200/${subwayLine}`);

//   if (!res.ok) throw new Error("API ERROR");

//   return res.json();
// }
