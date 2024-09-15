import { FormElementsEnums } from "enums/screenEnums";
import { ICommonFormType } from "types/HomepageTypes";

export const LOGIN_FORM_ELEMENTS: ICommonFormType = [
  {
    key: "username",
    label: "username",
    type: FormElementsEnums.TEXT
  },
  {
    key: "password",
    label: "password",
    type: FormElementsEnums.PASSWORD
  }
];

export const PASSWORD_UPDATE_FORM_ELEMENTS: ICommonFormType = [
  {
    key: "username",
    label: "username",
    type: FormElementsEnums.TEXT
  },
  {
    key: "email",
    label: "email",
    type: FormElementsEnums.TEXT
  }
];
