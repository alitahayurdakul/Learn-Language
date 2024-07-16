import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "components/header/Header";
import { ScoreDetail } from "components/scores/ScoreDetail";
import { useTranslation } from "react-i18next";
import { IScoreDataTypes } from "types/HomepageTypes";

import AsyncStorage from "@react-native-async-storage/async-storage";

const ScoresScreen = () => {
  const { t } = useTranslation("translation");
  const [scores, setScores] = useState<IScoreDataTypes[] | []>([]);

  const getScoreList = useCallback(async () => {
    // await AsyncStorage.removeItem("scores");
    const scoreList = await AsyncStorage.getItem("scores");
    if (scoreList !== null && scoreList) {
      setScores(JSON.parse(scoreList).reverse());
    }
  }, [setScores]);

  useEffect(() => {
    getScoreList();
  }, [getScoreList]);

  return (
    <View style={styles.scoresContainer}>
      <ScrollView style={{ paddingHorizontal: 20, paddingTop: 50 }}>
        <Header headerName={t("scores")} />

        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.headerCell}>{t("scoreTableHeader.order")}</Text>
            <Text style={styles.headerCell}>{t("scoreTableHeader.score")}</Text>
            <Text style={{ ...styles.headerCell, ...styles.wideCell }}>
              {t("scoreTableHeader.gameType")}
            </Text>
            <Text style={{ ...styles.headerCell, ...styles.dateCell }}>
              {t("scoreTableHeader.date")}
            </Text>
          </View>
          <View style={{ height: 500 }}>
            <ScrollView nestedScrollEnabled={true}>
              {scores &&
                (scores.length > 0 ? (
                  scores.map((data: IScoreDataTypes, index: number) => (
                    <React.Fragment key={index}>
                      <ScoreDetail scoreDetail={data} order={index + 1} />
                    </React.Fragment>
                  ))
                ) : (
                  <Text style={styles.notFound}>{t("notFoundScoreData")}</Text>
                ))}
            </ScrollView>
          </View>
        </View>

        {/* Footer */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scoresContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  table: {
    marginBottom: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  headerCell: {
    flex: 1,
    padding: 5,
    textAlign: "center",
    fontSize: 18,
    color: "black",
    borderColor: "black",
    fontWeight: "bold"
  },
  wideCell: {
    flex: 1.5
  },
  dateCell: {
    flex: 2
  },
  notFound: {
    textAlign: "center",
    fontSize: 16,
    paddingTop: 10
  }
});

export default ScoresScreen;
