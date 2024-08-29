import { ScreenEnums } from "enums/screenEnums";
import { IHomePageMenuDataTypes } from "types/HomepageTypes";

export const StartMenuDatas: IHomePageMenuDataTypes[] = [
  {
    key: "enToTr",
    routePageName: ScreenEnums.game
  },
  {
    key: "trToEn",
    routePageName: ScreenEnums.game
  }
];
