/*
"use client";

import { useArrival } from "@/features/subway/hooks/useArrival";

export default function Home() {
  useArrival("서울역");
  return (
    <main>
      <div>지하철 정보</div>
    </main>
  );
}
*/

"use client";

import { useEffect } from "react";
import { getRealTimeArrival } from "@/lib/subway";

export default function TestPage() {
  useEffect(() => {
    async function test() {
      const data = await getRealTimeArrival("서울");
      console.log(data);
    }

    test();
  }, []);

  return <div>API TEST</div>;
}
