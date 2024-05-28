import { ScrollView, StyleSheet, View } from "react-native";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import HomeBody from "components/Homepage/HomeBody";

const HomepageScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Header headerName="English Game" />
          <HomeBody />
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 30,
  },
});

export default HomepageScreen;
