import Item from "components/common/MenuItem";
import { BackHandler, FlatList, StyleSheet, Text, View } from "react-native";
import { IHomePageMenuDataTypes } from "types/HomepageTypes";
import { MaterialIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const GameOverMenu: IHomePageMenuDataTypes[] = [
  {
    key: "homepage",
    routePageName: "HomepageScreen",
  },
  {
    key: "reloadGame",
    routePageName: "StartScreen",
  },
];

const GameOverScreen = ({ route }: { route: any }) => {
  const { t } = useTranslation("translation");

  //   Go back disable
  useEffect(() => {
    const backAction = () => {
      //   navigation.navigate("ScoresScreen");
      null;
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.notificationContainer}>
        <MaterialIcons name="error-outline" size={100} color="red" />
        <Text style={styles.textStyle}>{t("gameOver")}</Text>
        <Text style={styles.scoreStyle}>
          {`${t("score")}: ${route.params.score}`}
        </Text>
      </View>
      <View>
        <FlatList
          data={GameOverMenu}
          renderItem={({ item }) => <Item data={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    width: "80%",
    marginHorizontal: "10%",
    justifyContent: "center",
  },
  notificationContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  textStyle: {
    color: "red",
    fontSize: 30,
  },
  scoreStyle: {
    color: "black",
    fontSize: 20,
  },
});

export default GameOverScreen;
