import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { REGISTER_FORM_ELEMENTS } from "const/RegisterForm";
import { FormElementsEnums, ScreenEnums } from "enums/screenEnums";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  ICommonFormElementTypes,
  IRegisterFormType
} from "types/HomepageTypes";
import { RegisterValidation } from "utils/registerValidation";

import { yupResolver } from "@hookform/resolvers/yup";

const borderRadius = 15;
const commonColor = "#9f25e9";
const commonColorDark = "#9900f5";

const RegisterScreen = (props: any) => {
  const { t } = useTranslation("translation", { keyPrefix: "register" });
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IRegisterFormType>({
    resolver: yupResolver(RegisterValidation(t))
  });
  const [focused, setFocused] = useState<string>("");

  const onSubmit: SubmitHandler<IRegisterFormType> = (values) => {
    if (values) {
      props.navigation.navigate(ScreenEnums.login);
    }
  };

  return (
    <ScrollView>
      <View style={styles.loginContainer}>
        <Text style={styles.header}>{t("header")}</Text>
        <View style={styles.form}>
          {REGISTER_FORM_ELEMENTS.map(
            (element: ICommonFormElementTypes, index: number) => {
              if (element.type === FormElementsEnums.TEXT) {
                return (
                  <React.Fragment key={index}>
                    <View>
                      <Controller
                        control={control}
                        name={element.key as keyof IRegisterFormType}
                        render={({ field: { onChange, value, name } }) => (
                          <>
                            <Text style={styles.label}>{t(name)}</Text>
                            <TextInput
                              style={[
                                styles.input,
                                focused === name && styles.focusInput
                              ]}
                              placeholder={t(`placeholders.${name}`)}
                              onChangeText={onChange}
                              value={value as string}
                              onFocus={() => setFocused(name)}
                              onBlur={() => setFocused("")}
                            />
                          </>
                        )}
                        defaultValue=""
                      />
                      {errors[element.key as keyof IRegisterFormType] && (
                        <Text style={styles.errorText}>
                          {
                            errors[element.key as keyof IRegisterFormType]
                              ?.message as string
                          }
                        </Text>
                      )}
                    </View>
                  </React.Fragment>
                );
              }

              if (element.type === FormElementsEnums.NUMBER) {
                return (
                  <React.Fragment key={index}>
                    <View>
                      <Controller
                        control={control}
                        name={element.key as keyof IRegisterFormType}
                        render={({ field: { onChange, value, name } }) => (
                          <>
                            <Text style={styles.label}>{t(name)}</Text>
                            <TextInput
                              style={[
                                styles.input,
                                focused === name && styles.focusInput
                              ]}
                              placeholder={t(`placeholders.${name}`)}
                              onChangeText={onChange}
                              value={value as string}
                              onFocus={() => setFocused(name)}
                              onBlur={() => setFocused("")}
                              keyboardType="numeric"
                            />
                          </>
                        )}
                        rules={{
                          required: t(`errors.${element.key}`),
                          pattern: {
                            value: /^\d+$/,
                            message: t(`errors.number`)
                          }
                        }}
                        defaultValue=""
                      />
                      {errors[element.key as keyof IRegisterFormType] && (
                        <Text style={styles.errorText}>
                          {
                            errors[element.key as keyof IRegisterFormType]
                              ?.message as string
                          }
                        </Text>
                      )}
                    </View>
                  </React.Fragment>
                );
              }

              if (element.type === FormElementsEnums.PASSWORD) {
                return (
                  <React.Fragment key={index}>
                    <View>
                      <Controller
                        control={control}
                        name={element.key as keyof IRegisterFormType}
                        render={({ field: { onChange, value, name } }) => (
                          <>
                            <Text style={styles.label}>{t(name)}</Text>
                            <TextInput
                              style={[
                                styles.input,
                                focused === name && styles.focusInput
                              ]}
                              placeholder={t(`placeholders.${name}`)}
                              onChangeText={onChange}
                              value={value as string}
                              onFocus={() => setFocused(name)}
                              onBlur={() => setFocused("")}
                            />
                          </>
                        )}
                        defaultValue=""
                      />
                      {errors[element.key as keyof IRegisterFormType] && (
                        <Text style={styles.errorText}>
                          {
                            errors[element.key as keyof IRegisterFormType]
                              ?.message as string
                          }
                        </Text>
                      )}
                    </View>
                  </React.Fragment>
                );
              }
            }
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText}>{t("register-button")}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linkContainer}>
          <Text
            style={styles.registerText}
            onPress={() => props.navigation.navigate(ScreenEnums.login)}
          >
            {t("links.login")}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  header: {
    fontSize: 35,
    color: commonColorDark,
    paddingBottom: 40,
    fontWeight: "600"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "75%"
  },

  label: {
    color: "#262d33",
    fontWeight: "600",
    marginBottom: 5,
    opacity: 0.8
  },

  input: {
    borderWidth: 1,
    borderRadius,
    paddingVertical: 8,
    paddingHorizontal: 15
  },

  focusInput: {
    borderColor: commonColor
  },

  errorText: {
    color: "red",
    marginTop: 5
  },
  button: {
    backgroundColor: commonColorDark,
    paddingVertical: 10,
    display: "flex",
    alignItems: "center",
    borderRadius
  },
  buttonText: {
    color: "white",
    fontSize: 18
  },
  linkContainer: {
    display: "flex",
    flex: 0.3,
    justifyContent: "space-between",
    marginTop: 10
  },
  registerText: {
    textAlign: "center",
    color: commonColor
  }
});

export default RegisterScreen;
