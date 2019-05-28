export interface MatchData {

  matchId: number;
  venue: string;
  homeTeam: HomeTeam;
  awayTeam: AwayTeam;
  dateTime: Date;
  homeResult: string;
  tossResult: string;
  momResult: string;
}

export interface HomeTeam {

  name: string;
  flag: string;
  captain: string;
}

export interface AwayTeam {
  name: string;
  flag: string;
  captain: string;

}

