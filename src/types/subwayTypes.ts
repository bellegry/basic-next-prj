export interface Subway {
  subwayId: number; // 지하철호선 ID ex) 1001-1호선
  statnId: number; // 지하철역 ID
  statnNm: string; // 지하철역 이름
  btrainSttus: string; // 열차 상태 ex) 일반,급행
  updnLine: string; // 상하행선 정보 ex) 상행, 하행
  trainLineNm: string; // 도착지방면 ex) 인천행
  statnFid: number; // 이전지하철역ID
  statnTid: number; // 다음지하철역ID
  barvlDt: number; // 열차도착예정시간(초)
  bstatnId: number; // 종착지하철역ID
  bstatnNm: string; // 종착지하철역 이름
  arvlCd: number; // 도착예정시간코드 (0:진입, 1:도착, 2:출발, 3:전역출발, 4:전역진입, 5:전역도착, 99:운행중)
}
