import { TFunction } from "i18next";
import { IPersonalInformationTypes } from "types/HomepageTypes";
import * as Yup from "yup";

export function PersonalInformationValidation(
  t: TFunction<"translation", "translation">
): Yup.ObjectSchema<IPersonalInformationTypes> {
  return Yup.object({
    fullName: Yup.string()
      .typeError(t("errors.required") || "")
      .required(t("errors.required") || ""),
    username: Yup.string()
      .typeError(t("errors.required") || "")
      .required(t("errors.required") || ""),
    age: Yup.number()
      .typeError(t("errors.required") || "")
      .required(t("errors.required") || ""),
    email: Yup.string()
      .required(t("errors.required") || "")
      .email(t("errors.email") || ""),
    country: Yup.string()
      .typeError(t("errors.required") || "")
      .required(t("errors.required") || "")
  });
}
