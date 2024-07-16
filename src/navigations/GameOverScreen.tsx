import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Item from "components/common/MenuItem";
import { ScreenEnums } from "enums/screenEnums";
import { useGoBackHandler } from "hooks/useGoBackHandler";
import { useTranslation } from "react-i18next";
import { IHomePageMenuDataTypes } from "types/HomepageTypes";

import { MaterialIcons } from "@expo/vector-icons";

const GameOverMenu: IHomePageMenuDataTypes[] = [
  {
    key: "homepage",
    routePageName: ScreenEnums.homepage
  },
  {
    key: "reloadGame",
    routePageName: ScreenEnums.start
  }
];

const GameOverScreen = ({ route }: { route: any }) => {
  const { t } = useTranslation("translation");

  useGoBackHandler();

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
    justifyContent: "center"
  },
  notificationContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10
  },
  textStyle: {
    color: "red",
    fontSize: 30
  },
  scoreStyle: {
    color: "black",
    fontSize: 20
  }
});

export default GameOverScreen;
