import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { FormElementsEnums } from "enums/screenEnums";
import { TFunction } from "i18next";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  ICommonFormType,
  IFormElementTypes,
  IFormType
} from "types/HomepageTypes";

import { yupResolver } from "@hookform/resolvers/yup";

const borderRadius = 15;
const commonColor = "#9f25e9";
const commonColorDark = "#9900f5";

interface IPropsTypes {
  navigation: any;
  elements: ICommonFormType;
  afterSuccessLink?: string;
  validationSchema: any;
  t: TFunction;
  formKey: string;
}

const FormContainer = (props: IPropsTypes) => {
  const {
    navigation,
    elements,
    afterSuccessLink,
    validationSchema,
    t,
    formKey
  } = props;

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormType>({
    resolver: validationSchema && yupResolver(validationSchema)
  });
  const [focused, setFocused] = useState<string>("");

  const onSubmit: SubmitHandler<IFormType> = (values) => {
    if (values) {
      if (afterSuccessLink) {
        navigation.navigate(afterSuccessLink);
      }
    }
  };

  return (
    <View style={styles.form}>
      {elements.map((element: IFormElementTypes, index: number) => {
        if (element.type === FormElementsEnums.TEXT) {
          return (
            <React.Fragment key={index}>
              <View>
                <Controller
                  control={control}
                  name={element.key as keyof IFormType}
                  render={({ field: { onChange, value, name } }) => (
                    <>
                      <Text style={styles.label}>
                        {t(`${formKey}.${name}`)}
                      </Text>
                      <TextInput
                        style={[
                          styles.input,
                          focused === name && styles.focusInput
                        ]}
                        placeholder={t(`${formKey}.placeholders.${name}`)}
                        onChangeText={onChange}
                        value={value as string}
                        onFocus={() => setFocused(name)}
                        onBlur={() => setFocused("")}
                      />
                    </>
                  )}
                  defaultValue=""
                />
                {errors[element.key as keyof IFormType] && (
                  <Text style={styles.errorText}>
                    {errors[element.key as keyof IFormType]?.message as string}
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
                  name={element.key as keyof IFormType}
                  render={({ field: { onChange, value, name } }) => (
                    <>
                      <Text style={styles.label}>
                        {t(`${formKey}.${name}`)}
                      </Text>
                      <TextInput
                        style={[
                          styles.input,
                          focused === name && styles.focusInput
                        ]}
                        placeholder={t(`${formKey}.placeholders.${name}`)}
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
                {errors[element.key as keyof IFormType] && (
                  <Text style={styles.errorText}>
                    {errors[element.key as keyof IFormType]?.message as string}
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
                  name={element.key as keyof IFormType}
                  render={({ field: { onChange, value, name } }) => (
                    <>
                      <Text style={styles.label}>
                        {t(`${formKey}.${name}`)}
                      </Text>
                      <TextInput
                        style={[
                          styles.input,
                          focused === name && styles.focusInput
                        ]}
                        placeholder={t(`${formKey}.placeholders.${name}`)}
                        onChangeText={onChange}
                        value={value as string}
                        onFocus={() => setFocused(name)}
                        onBlur={() => setFocused("")}
                      />
                    </>
                  )}
                  defaultValue=""
                />
                {errors[element.key as keyof IFormType] && (
                  <Text style={styles.errorText}>
                    {errors[element.key as keyof IFormType]?.message as string}
                  </Text>
                )}
              </View>
            </React.Fragment>
          );
        }
      })}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>{t(`buttons.${formKey}`)}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default FormContainer;
