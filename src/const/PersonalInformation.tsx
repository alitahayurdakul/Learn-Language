import { FormElementsEnums } from "enums/screenEnums";
import { ICommonFormType } from "types/HomepageTypes";

export const PERSONAL_INFORMATION_FORM_ELEMENTS: ICommonFormType = [
  {
    key: "fullName",
    label: "fullName",
    type: FormElementsEnums.TEXT
  },
  {
    key: "username",
    label: "username",
    type: FormElementsEnums.TEXT
  },
  {
    key: "email",
    label: "email",
    type: FormElementsEnums.TEXT
  },
  {
    key: "age",
    label: "age",
    type: FormElementsEnums.NUMBER
  },
  {
    key: "country",
    label: "country",
    type: FormElementsEnums.SELECT,
    apiUrl: ""
  }
];
