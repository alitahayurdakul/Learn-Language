import { ScrollView, StyleSheet, View } from "react-native";
import { Footer } from "components/common/Footer";
import Header from "components/header/Header";
import HomeBody from "components/homepage/HomeBody";
import { useTranslation } from "react-i18next";

const HomepageScreen = () => {
  const { t } = useTranslation("translation");

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header headerName={t("appName")} />
          <HomeBody />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 30
  }
});

export default HomepageScreen;
