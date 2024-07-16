import { StyleSheet, View } from "react-native";
import { Footer } from "components/common/Footer";
import Header from "components/header/Header";
import StartScreenBody from "components/startScreen/StartScreenBody";

const StartScreen = () => (
  <View style={styles.container}>
    <View>
      <Header headerName="English Game" />
      <StartScreenBody />
    </View>
    <Footer />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 50
  }
});

export default StartScreen;
