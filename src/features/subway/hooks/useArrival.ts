import { useEffect } from "react";
import { getRealTimeArrival } from "@/lib/constants/subway";
import { useSubwayStore } from "@/store/subwayStore";

export function useArrival(station: string) {
  const setArrivals = useSubwayStore((state) => state.setArrivals);

  useEffect(() => {
    async function fetchDatat() {
      const data = await getRealTimeArrival(station);
      setArrivals(data.realTimeArrivalList);
    }

    fetchDatat();
  }, [station]);
}
