import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { LoginEnums, ScreenEnums } from "enums/screenEnums";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ILoginFormType } from "types/HomepageTypes";

const borderRadius = 15;
const commonColor = "#9f25e9";
const commonColorDark = "#9900f5";

const LoginScreen = (props: any) => {
  const { t } = useTranslation("translation", { keyPrefix: "loginForm" });
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginFormType>();
  const [focused, setFocused] = useState<string>("");

  const onSubmit: SubmitHandler<ILoginFormType> = (values) => {
    if (values) {
      props.navigation.navigate(ScreenEnums.homepage);
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.header}>{t("headers.login")}</Text>
      <View style={styles.form}>
        <View>
          <Controller
            control={control}
            name={LoginEnums.username}
            render={({ field: { onChange, value, name } }) => (
              <TextInput
                style={[styles.input, focused === name && styles.focusInput]}
                placeholder={t(`placeholders.${name}`)}
                onChangeText={onChange}
                value={value}
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused("")}
              />
            )}
            rules={{ required: t(`errors.${LoginEnums.username}`) }}
            defaultValue=""
          />
          {errors.username && (
            <Text style={styles.errorText}>
              {errors.username.message as string}
            </Text>
          )}
        </View>
        <View>
          <Controller
            control={control}
            render={({ field: { onChange, value, name } }) => (
              <TextInput
                style={[styles.input, focused === name && styles.focusInput]}
                placeholder={t(`placeholders.${LoginEnums.password}`)}
                onChangeText={onChange}
                value={value}
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused("")}
              />
            )}
            name={LoginEnums.password}
            rules={{ required: t(`errors.${LoginEnums.password}`) }}
            defaultValue=""
          />
          {errors.password && (
            <Text style={styles.errorText}>
              {errors.password.message as string}
            </Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>{t("buttons.signIn")}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linkContainer}>
        <Text
          style={styles.registerText}
          onPress={() => props.navigation.navigate(ScreenEnums.forgotPassword)}
        >
          {t("links.forgotPassword")}
        </Text>
        <View style={styles.register}>
          <Text style={{ opacity: 0.5 }}>{t("links.registerQuestion")}</Text>
          <Text
            style={styles.registerText}
            onPress={() => props.navigation.navigate(ScreenEnums.register)}
          >
            {t("links.register")}
          </Text>
        </View>
      </View>
    </View>
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
  register: {
    display: "flex",
    gap: 5,
    alignItems: "center"
  },
  registerText: {
    textAlign: "center",
    color: commonColor
  }
});

export default LoginScreen;
