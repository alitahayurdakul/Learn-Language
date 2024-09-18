import { TFunction } from "i18next";
import { IForgotPasswordFormType, ILoginFormType } from "types/HomepageTypes";
import * as Yup from "yup";

export function LoginValidation(
  t: TFunction<"translation", "translation">
): Yup.ObjectSchema<ILoginFormType> {
  return Yup.object({
    username: Yup.string()
      .typeError(t("form.errors.required") || "")
      .required(t("form.errors.required") || ""),
    password: Yup.string().required(t("form.errors.required") || "")
  });
}

export function ForgotPasswordValidation(
  t: TFunction<"translation", "translation">
): Yup.ObjectSchema<IForgotPasswordFormType> {
  return Yup.object({
    username: Yup.string()
      .typeError(t("form.errors.required") || "")
      .required(t("form.errors.required") || ""),
    email: Yup.string()
      .required(t("form.errors.required") || "")
      .email(t("form.errors.email") || "")
  });
}
