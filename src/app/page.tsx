"use client";

// import { useEffect, useState } from "react";
// import { getRealTimeArrival, getRealTimePosition } from "@/lib/constants/subway";
// import { Subway } from "@/types/subwayTypes";
import AIChat from "@/app/aiChat/Page";

// export default function TestPage() {
//   const [subwayList, setSubwayList] = useState<Subway[]>([]);

//   useEffect(() => {
//     async function test() {
//       const subwayList = await getRealTimePosition("1호선");
//       console.log(subwayList);
//       setSubwayList(subwayList.realtimePositionList);

//       const data = await getRealTimeArrival("서울");
//       const firstLineData = data.realtimeArrivalList?.filter((item: Subway) => {
//         return item.subwayId === "1001"; // 1호선 데이터만 필터링
//       });
//       console.log(firstLineData);
//     }

//     test();
//   }, []);

//   return (
//     <div>
//       <div>API TEST</div>;
//       <ul>
//         {subwayList.map((item) => (
//           <li key={item.trainNo}>{item.statnNm}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default function Home() {
  return <AIChat />;
}
