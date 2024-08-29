import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "components/header/Header";
import { ScoreDetail } from "components/scores/ScoreDetail";
import { FilterTypesEnums, SortingTypeEnums } from "enums/screenEnums";
import { useTranslation } from "react-i18next";
import { IScoreDataTypes, ISortingFilterItemType } from "types/HomepageTypes";

import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ScoresScreen = () => {
  const { t } = useTranslation("translation");
  const [scores, setScores] = useState<IScoreDataTypes[] | []>([]);
  const [sortingFilterItem, setSortingFilterItem] =
    useState<ISortingFilterItemType>({
      gameType: "",
      score: ""
    });

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

  const onSort = (filterType: keyof IScoreDataTypes, sortingType: string) => {
    const sortedScores = [...scores];

    if (sortingType === SortingTypeEnums.asc) {
      sortedScores.sort((data1: IScoreDataTypes, data2: IScoreDataTypes) => {
        // data1[filterType].localeCompare(data2[filterType])
        if (data1[filterType] > data2[filterType]) {
          return 1;
        }
        if (data1[filterType] < data2[filterType]) {
          return -1;
        }

        return 0;
      });
    } else {
      sortedScores.sort((data1: IScoreDataTypes, data2: IScoreDataTypes) => {
        if (data1[filterType] < data2[filterType]) {
          return 1;
        }
        if (data1[filterType] > data2[filterType]) {
          return -1;
        }

        return 0;
      });
    }
    setScores(sortedScores);
  };

  return (
    <View style={styles.scoresContainer}>
      <ScrollView style={{ paddingHorizontal: 20, paddingTop: 50 }}>
        <Header headerName={t("scores")} />

        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.headerCell}>{t("scoreTableHeader.order")}</Text>
            <View style={{ ...styles.headerSortCell, ...styles.wideCell }}>
              <Text style={styles.headerCell}>
                {t("scoreTableHeader.score")}
              </Text>
              <View style={styles.sortContainer}>
                <AntDesign
                  name="caretup"
                  size={10}
                  color="black"
                  onPress={() =>
                    onSort(FilterTypesEnums.score, SortingTypeEnums.asc)
                  }
                />
                <AntDesign
                  name="caretdown"
                  size={10}
                  color="black"
                  onPress={() =>
                    onSort(FilterTypesEnums.score, SortingTypeEnums.desc)
                  }
                />
              </View>
            </View>
            <View style={{ ...styles.headerSortCell, ...styles.wideCell }}>
              <Text style={styles.headerCell}>
                {t("scoreTableHeader.gameType")}
              </Text>
              <View style={styles.sortContainer}>
                <AntDesign
                  name="caretup"
                  size={10}
                  color="black"
                  onPress={() =>
                    onSort(FilterTypesEnums.gameType, SortingTypeEnums.asc)
                  }
                />
                <AntDesign
                  name="caretdown"
                  size={10}
                  color="black"
                  onPress={() =>
                    onSort(FilterTypesEnums.gameType, SortingTypeEnums.desc)
                  }
                />
              </View>
            </View>
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
  headerSortCell: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 5
  },
  headerCell: {
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
  sortContainer: {
    display: "flex",
    flexDirection: "column"
  },
  notFound: {
    textAlign: "center",
    fontSize: 16,
    paddingTop: 10
  }
});

export default ScoresScreen;
