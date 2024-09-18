import { StyleSheet, Text, View } from "react-native";
import FormContainer from "components/common/Form";
import { PASSWORD_UPDATE_FORM_ELEMENTS } from "const/LoginConst";
import { FormNamesEnums, ScreenEnums } from "enums/screenEnums";
import { useTranslation } from "react-i18next";
import { ForgotPasswordValidation } from "utils/loginValidation";

const commonColor = "#9f25e9";
const commonColorDark = "#9900f5";

const ForgotPasswordScreen = (props: any) => {
  const { t } = useTranslation("translation");

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.header}>{t("forgot-password.header")}</Text>
      <FormContainer
        navigation={props.navigation}
        afterSuccessLink={ScreenEnums.login}
        elements={PASSWORD_UPDATE_FORM_ELEMENTS}
        validationSchema={ForgotPasswordValidation(t)}
        t={t}
        formKey={FormNamesEnums.forgotPassword}
      />
      <View style={styles.linkContainer}>
        <Text
          style={styles.registerText}
          onPress={() => props.navigation.navigate(ScreenEnums.login)}
        >
          {t("forgot-password.links.login")}
        </Text>
        <View style={styles.register}>
          <Text style={{ opacity: 0.5 }}>
            {t("forgot-password.links.registerQuestion")}
          </Text>
          <Text
            style={styles.registerText}
            onPress={() => props.navigation.navigate(ScreenEnums.register)}
          >
            {t("forgot-password.links.register")}
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

export default ForgotPasswordScreen;
