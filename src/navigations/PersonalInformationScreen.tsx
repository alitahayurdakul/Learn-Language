import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "components/header/Header";
import { PersonalInformationUpdate } from "components/personalInformation/PersonalInformationUpdate";
import { useTranslation } from "react-i18next";

const PersonalInformationScreen = () => {
  const { t } = useTranslation("translation");
  return (
    <View style={styles.scoresContainer}>
      <ScrollView style={{ height: "100%" }} nestedScrollEnabled={true}>
        <Header headerName={t("personalInformation")} />
        <PersonalInformationUpdate />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scoresContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    paddingTop: 50,
    paddingBottom: 20
  }
});

export default PersonalInformationScreen;
