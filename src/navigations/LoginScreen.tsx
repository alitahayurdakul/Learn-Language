import { StyleSheet, Text, View } from "react-native";
import FormContainer from "components/common/Form";
import { LOGIN_FORM_ELEMENTS } from "const/LoginConst";
import { FormNamesEnums, ScreenEnums } from "enums/screenEnums";
import { useTranslation } from "react-i18next";
import { LoginValidation } from "utils/loginValidation";

const commonColor = "#9f25e9";
const commonColorDark = "#9900f5";

const LoginScreen = (props: any) => {
  const { t } = useTranslation("translation");

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.header}>{t("sign-in.header")}</Text>
      <FormContainer
        navigation={props.navigation}
        afterSuccessLink={ScreenEnums.homepage}
        elements={LOGIN_FORM_ELEMENTS}
        validationSchema={LoginValidation(t)}
        t={t}
        formKey={FormNamesEnums.login}
      />
      <View style={styles.linkContainer}>
        <Text
          style={styles.registerText}
          onPress={() => props.navigation.navigate(ScreenEnums.forgotPassword)}
        >
          {t("sign-in.links.forgotPassword")}
        </Text>
        <View style={styles.register}>
          <Text style={{ opacity: 0.5 }}>
            {t("sign-in.links.registerQuestion")}
          </Text>
          <Text
            style={styles.registerText}
            onPress={() => props.navigation.navigate(ScreenEnums.register)}
          >
            {t("sign-in.links.register")}
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

export default LoginScreen;
