import { StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation("translation");

  return <Text style={styles.footer}>{t("footer")}</Text>;
};

const styles = StyleSheet.create({
  footer: {
    fontSize: 11,
    backgroundColor: "#1700FD",
    textAlign: "center",
    paddingVertical: 10,
    fontWeight: "bold",
    color: "white"
  }
});
