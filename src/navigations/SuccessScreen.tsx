import { Image, StyleSheet, Text, View } from "react-native";
import Item from "components/common/MenuItem";
import { ScreenEnums } from "enums/screenEnums";
import { useGoBackHandler } from "hooks/useGoBackHandler";
import { useTranslation } from "react-i18next";

import HappyGif from "@/assets/giphy.webp";

const SuccessScreen = ({ route }: { route: any }) => {
  useGoBackHandler();

  const { t } = useTranslation("translation");

  return (
    <View style={styles.successPageContainer}>
      <Image source={HappyGif} style={styles.gifContainer} />
      <Text style={styles.scoreStyle}>
        {`${t("score")}: ${route.params.score}`}
      </Text>
      <View style={styles.navigationButtonContainer}>
        <Item
          data={{
            key: "homepage",
            routePageName: ScreenEnums.homepage
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
    gap: 20
  },
  gifContainer: {
    // width: '70%',
    height: "50%"
  },
  scoreStyle: {
    fontSize: 25,
    textAlign: "center"
  },
  navigationButtonContainer: {
    width: "80%",
    alignSelf: "center"
  }
});

export default SuccessScreen;
