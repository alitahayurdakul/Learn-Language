import { TFunction } from "i18next";
import { IRegisterFormType } from "types/HomepageTypes";
import * as Yup from "yup";

export function RegisterValidation(
  t: TFunction<"translation", "translation">
): Yup.ObjectSchema<IRegisterFormType> {
  return Yup.object({
    fullName: Yup.string()
      .typeError(t("form.errors.required") || "")
      .required(t("form.errors.required") || ""),
    username: Yup.string()
      .typeError(t("form.errors.required") || "")
      .required(t("form.errors.required") || ""),
    age: Yup.number()
      .typeError(t("form.errors.number") || "")
      .required(t("form.errors.required") || ""),
    password: Yup.string()
      .required(t("form.errors.required") || "")
      .min(6, t("form.errors.min", { count: 6 }) || ""),
    rePassword: Yup.string()
      .required(t("form.errors.required") || "")
      .oneOf([Yup.ref("password")], t("form.errors.match") || ""),
    email: Yup.string()
      .required(t("form.errors.required") || "")
      .email(t("form.errors.email") || ""),
    country: Yup.string()
      .typeError(t("form.errors.required") || "")
      .required(t("form.errors.required") || "")
  });
}
