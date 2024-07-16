export interface IHomePageMenuDataTypes {
  key: string;
  routePageName: string;
}

export interface IGameQuestionTypes {
  enToTr: IGameType[];
  trToEn: IGameType[];
}

export interface IGameOptionType {
  key: string;
  content: string;
}

export interface IGameType {
  questionContent: string;
  answer: string;
  options: IGameOptionType[];
}

export interface ILanguageSelectType {
  key: string;
}

export interface IScoreDataTypes {
  date: string;
  score: string;
  gameType: string;
}
