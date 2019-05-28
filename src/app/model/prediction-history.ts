import {MatchData} from "./match-data";


export interface PredictionHistory {

  matchId: number;
  homeTeam: string;
  awayTeam: string;
  prediction: string;
  actualResult: string;
  points: number;
  match : MatchData;
}

