import { ScrollView, StyleSheet, View } from "react-native";

import Header from "components/header/Header";
import HomeBody from "components/homepage/HomeBody";
import { Footer } from "components/common/Footer";

const HomepageScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header headerName="English Game" />
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
    paddingTop: 30,
  },
});

export default HomepageScreen;
