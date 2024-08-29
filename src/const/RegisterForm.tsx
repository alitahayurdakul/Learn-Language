import { FormElementsEnums } from "enums/screenEnums";
import { ICommonFormType } from "types/HomepageTypes";

export const REGISTER_FORM_ELEMENTS: ICommonFormType = [
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
    key: "password",
    label: "password",
    type: FormElementsEnums.PASSWORD
  },
  {
    key: "rePassword",
    label: "rePassword",
    type: FormElementsEnums.PASSWORD
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
