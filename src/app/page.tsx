"use client";

import { useEffect } from "react";
import { getRealTimeArrival } from "@/lib/constants/subway";
import { Subway } from "@/types/subwayTypes";

export default function TestPage() {
  useEffect(() => {
    async function test() {
      const data = await getRealTimeArrival("서울");
      const firstLineData = data.realtimeArrivalList?.filter((item: Subway) => {
        return item.subwayId === 1001; // 1호선 데이터만 필터링
      });
      console.log(firstLineData);
    }

    test();
  }, []);

  return <div>API TEST</div>;
}
