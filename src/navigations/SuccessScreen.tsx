import { Image, StyleSheet, View } from "react-native";

import { useGoBackHandler } from "hooks/useGoBackHandler";
import Item from "components/common/MenuItem";
import { ScreenEnums } from "enums/screenEnums";

import HappyGif from "@/assets/giphy.webp";

const SuccessScreen = () => {
  useGoBackHandler();
  return (
    <View style={styles.successPageContainer}>
      <Image source={HappyGif} style={styles.gifContainer} />
      <View style={styles.navigationButtonContainer}>
        <Item
          data={{
            key: "homepage",
            routePageName: ScreenEnums.homepage,
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
