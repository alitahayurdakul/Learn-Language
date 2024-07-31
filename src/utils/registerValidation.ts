import { TFunction } from "i18next";
import { IRegisterFormType } from "types/HomepageTypes";
import * as Yup from "yup";

export function RegisterValidation(
  t: TFunction<"translation", "translation">
): Yup.ObjectSchema<IRegisterFormType> {
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
    password: Yup.string()
      .required(t("errors.required") || "")
      .min(6, t("errors.min", { count: 6 }) || ""),
    rePassword: Yup.string()
      .required(t("errors.required") || "")
      .oneOf([Yup.ref("password")], t("errors.match") || ""),
    email: Yup.string()
      .required(t("errors.required") || "")
      .email(t("errors.email") || ""),
    country: Yup.string()
      .typeError(t("errors.required") || "")
      .required(t("errors.required") || "")
  });
}
