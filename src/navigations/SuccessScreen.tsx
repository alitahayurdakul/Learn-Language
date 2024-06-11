import { Image, StyleSheet, Text, View } from "react-native";

import HappyGif from "@/assets/giphy.webp";
import Item from "components/common/MenuItem";

const SuccessScreen = () => {
  return (
    <View style={styles.successPageContainer}>
      <Image source={HappyGif} style={styles.gifContainer} />
      <View style={styles.navigationButtonContainer}>
        <Item
          data={{
            key: "homepage",
            routePageName: "HomepageScreen",
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  successPageContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  gifContainer: {
    width: "100%",
  },
  navigationButtonContainer: {
    width: "80%",
    alignSelf: "center",
  },
});

export default SuccessScreen;
