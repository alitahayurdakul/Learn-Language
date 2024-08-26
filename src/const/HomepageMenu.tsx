import { ScreenEnums } from "enums/screenEnums";
import { IHomePageMenuDataTypes } from "types/HomepageTypes";

export const HOME_PAGE_MENU_DATAS: IHomePageMenuDataTypes[] = [
  {
    key: "start",
    routePageName: ScreenEnums.start
  },
  {
    key: "myScores",
    routePageName: ScreenEnums.scoresList
  },
  {
    key: "personalInformation",
    routePageName: ScreenEnums.personalInfo
  },
  {
    key: "aboutUs",
    routePageName: ScreenEnums.about
  },
  {
    key: "logOut",
    routePageName: ScreenEnums.login
  }
];
