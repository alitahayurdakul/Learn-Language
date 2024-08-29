import { ScrollView, StyleSheet, View } from "react-native";
import Header from "components/header/Header";
import { PasswordUpdate } from "components/personalInformation/PasswordUpdate";
import { PersonalInformationUpdate } from "components/personalInformation/PersonalInformationUpdate";
import { useTranslation } from "react-i18next";

const PersonalInformationScreen = () => {
  const { t } = useTranslation("translation");
  return (
    <ScrollView style={{ height: "100%" }} nestedScrollEnabled={true}>
      <View style={styles.scoresContainer}>
        <Header headerName={t("personalInformation")} />
        <PersonalInformationUpdate />
        <PasswordUpdate />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scoresContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 40,
    paddingTop: 50,
    paddingBottom: 20
  }
});

export default PersonalInformationScreen;
