import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { PASSWORD_UPDATE_FORM_ELEMENTS } from "const/InformationUpdate";
import { FormElementsEnums } from "enums/screenEnums";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IFormElementTypes, IPasswordUpdateTypes } from "types/HomepageTypes";
import { PasswordUpdateValidation } from "utils/personalInformationValidation";

import { yupResolver } from "@hookform/resolvers/yup";

const borderRadius = 15;
const commonColor = "#9f25e9";
const commonColorDark = "#9900f5";

export const PasswordUpdate = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "personal-information-forms"
  });
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IPasswordUpdateTypes>({
    resolver: yupResolver(PasswordUpdateValidation(t))
  });
  const [focused, setFocused] = useState<string>("");

  const onSubmit: SubmitHandler<IPasswordUpdateTypes> = (values) => {
    console.log(values);
  };

  return (
    <View>
      <View style={styles.updatePasswordContainer}>
        <Text style={styles.header}>{t("subHeaders.information")}</Text>
        <View style={styles.form}>
          {PASSWORD_UPDATE_FORM_ELEMENTS.map(
            (element: IFormElementTypes, index: number) => {
              if (element.type === FormElementsEnums.PASSWORD) {
                return (
                  <React.Fragment key={index}>
                    <View>
                      <Controller
                        control={control}
                        name={element.key as keyof IPasswordUpdateTypes}
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
                      {errors[element.key as keyof IPasswordUpdateTypes] && (
                        <Text style={styles.errorText}>
                          {
                            errors[element.key as keyof IPasswordUpdateTypes]
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
            <Text style={styles.buttonText}>
              {t("buttons.update-password")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  updatePasswordContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  header: {
    fontSize: 25,
    color: commonColorDark,
    paddingBottom: 20,
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
    borderRadius,
    marginTop: 10
  },
  buttonText: {
    color: "white",
    fontSize: 18
  }
});
