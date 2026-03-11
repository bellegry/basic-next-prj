import { create } from "zustand";
import { SubwayState } from "../types/subwayTypes";

export const useSubwayStore = create<SubwayState>((set) => ({
  arrivals: [],
  trains: [],
  setArrivals: (data) => set({ arrivals: data }),
  setTrains: (data) => set({ trains: data }),
}));
