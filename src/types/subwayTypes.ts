export interface SubwayState {
  arrivals: Arrival[];
  trains: Train[];
  setArrivals: (data: Arrival[]) => void;
  setTrains: (data: Train[]) => void;
}
