import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { INFORMATION_UPDATE_FORM_ELEMENTS } from "const/InformationUpdate";
import { FormElementsEnums } from "enums/screenEnums";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  ICommonFormElementTypes,
  IPersonalInformationTypes
} from "types/HomepageTypes";
import { PersonalInformationValidation } from "utils/personalInformationValidation";

import { yupResolver } from "@hookform/resolvers/yup";

const borderRadius = 15;
const commonColor = "#9f25e9";
const commonColorDark = "#9900f5";

export const PersonalInformationUpdate = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "personal-information-forms"
  });
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IPersonalInformationTypes>({
    resolver: yupResolver(PersonalInformationValidation(t))
  });
  const [focused, setFocused] = useState<string>("");

  const onSubmit: SubmitHandler<IPersonalInformationTypes> = (values) => {
    console.log(values);
  };

  return (
    <ScrollView>
      <View style={styles.personalInformationContainer}>
        <Text style={styles.header}>{t("subHeaders.information")}</Text>
        <View style={styles.form}>
          {INFORMATION_UPDATE_FORM_ELEMENTS.map(
            (element: ICommonFormElementTypes, index: number) => {
              if (element.type === FormElementsEnums.TEXT) {
                return (
                  <React.Fragment key={index}>
                    <View>
                      <Controller
                        control={control}
                        name={element.key as keyof IPersonalInformationTypes}
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
                      {errors[
                        element.key as keyof IPersonalInformationTypes
                      ] && (
                        <Text style={styles.errorText}>
                          {
                            errors[
                              element.key as keyof IPersonalInformationTypes
                            ]?.message as string
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
                        name={element.key as keyof IPersonalInformationTypes}
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
                      {errors[
                        element.key as keyof IPersonalInformationTypes
                      ] && (
                        <Text style={styles.errorText}>
                          {
                            errors[
                              element.key as keyof IPersonalInformationTypes
                            ]?.message as string
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
            <Text style={styles.buttonText}>
              {t("buttons.update-personal-info")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  personalInformationContainer: {
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
  }
});
