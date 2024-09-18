import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import FormContainer from "components/common/Form";
import { REGISTER_FORM_ELEMENTS } from "const/RegisterForm";
import { FormNamesEnums, ScreenEnums } from "enums/screenEnums";
import { useTranslation } from "react-i18next";
import { RegisterValidation } from "utils/registerValidation";

const commonColor = "#9f25e9";
const commonColorDark = "#9900f5";

const RegisterScreen = (props: any) => {
  const { t } = useTranslation("translation");

  return (
    <ScrollView>
      <View style={styles.loginContainer}>
        <Text style={styles.header}>{t("register.header")}</Text>
        <FormContainer
          navigation={props.navigation}
          afterSuccessLink={ScreenEnums.login}
          elements={REGISTER_FORM_ELEMENTS}
          validationSchema={RegisterValidation(t)}
          t={t}
          formKey={FormNamesEnums.register}
        />
        <View style={styles.linkContainer}>
          <Text
            style={styles.registerText}
            onPress={() => props.navigation.navigate(ScreenEnums.login)}
          >
            {t("register.links.login")}
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
