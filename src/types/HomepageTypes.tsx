import { FormElementsEnums } from "enums/screenEnums";

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

export interface ILoginFormType {
  username: string;
  password: string;
}

export interface IRegisterFormType {
  fullName: string;
  username: string;
  password: string;
  rePassword: string;
  email: string;
  age: number;
  country: string;
}

export interface ICommonFormElementTypes {
  key: string;
  label: string;
  type: FormElementsEnums;
  apiUrl?: string;
}

export type ICommonFormType = Array<ICommonFormElementTypes>;

export interface IPersonalInformationTypes {
  fullName: string;
  username: string;
  age: number;
  country: string;
}

export interface IPasswordUpdateTypes {
  password: string;
  rePassword: string;
}

export interface ISavedWordDataType {
  word: string;
  translationWord: string;
  translationLangs: string;
}

export type ISavedWordList = Array<ISavedWordDataType>;
