import { TFunction } from "i18next";
import { ILoginFormType, IPasswordUpdateFormType } from "types/HomepageTypes";
import * as Yup from "yup";

export function LoginValidation(
  t: TFunction<"translation", "translation">
): Yup.ObjectSchema<ILoginFormType> {
  return Yup.object({
    username: Yup.string()
      .typeError(t("errors.required") || "")
      .required(t("errors.required") || ""),
    password: Yup.string()
      .required(t("errors.required") || "")
      .min(6, t("errors.min", { count: 6 }) || "")
  });
}

export function ForgotPasswordValidation(
  t: TFunction<"translation", "translation">
): Yup.ObjectSchema<IPasswordUpdateFormType> {
  return Yup.object({
    username: Yup.string()
      .typeError(t("errors.required") || "")
      .required(t("errors.required") || ""),
    email: Yup.string()
      .required(t("errors.required") || "")
      .email(t("errors.email") || "")
  });
}
