import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "components/header/Header";
import { SavedWordDetail } from "components/savedWordList/SavedWordDetail";
import { useTranslation } from "react-i18next";
import { ISavedWordDataType, ISavedWordList } from "types/HomepageTypes";

import AsyncStorage from "@react-native-async-storage/async-storage";

const SavedWordListScreen = () => {
  const { t } = useTranslation("translation");
  const [savedWords, setSavedWords] = useState<ISavedWordList | []>([]);

  const getSavedWords = useCallback(async () => {
    // await AsyncStorage.removeItem("scores");
    const scoreList = await AsyncStorage.getItem("savedWords");
    if (scoreList !== null && scoreList) {
      setSavedWords(JSON.parse(scoreList).reverse());
    }
  }, [setSavedWords]);

  useEffect(() => {
    getSavedWords();
  }, [getSavedWords]);

  return (
    <View style={styles.savedWordsContainer}>
      <ScrollView style={{ paddingHorizontal: 20, paddingTop: 50 }}>
        <Header headerName={t("savedWordList")} />

        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={{ ...styles.headerCell, ...styles.wideCell }}>
              {t("saved-word-list.word")}
            </Text>

            <Text style={{ ...styles.headerCell, ...styles.wideCell }}>
              {t("saved-word-list.translationWord")}
            </Text>
            <Text style={{ ...styles.headerCell, ...{ flex: 1 } }}>
              {t("saved-word-list.translationLangs")}
            </Text>
          </View>
          <View style={{ height: 500 }}>
            <ScrollView nestedScrollEnabled={true}>
              {savedWords &&
                (savedWords.length > 0 ? (
                  savedWords.map((data: ISavedWordDataType, index: number) => (
                    <React.Fragment key={index}>
                      <SavedWordDetail savedWord={data} />
                    </React.Fragment>
                  ))
                ) : (
                  <Text style={styles.notFound}>
                    {t("notFoundSavedWordData")}
                  </Text>
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
  savedWordsContainer: {
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
    padding: 5,
    textAlign: "center",
    fontSize: 14,
    color: "black",
    borderColor: "black",
    fontWeight: "bold"
  },
  wideCell: {
    flex: 1.5
  },
  notFound: {
    textAlign: "center",
    fontSize: 16,
    paddingTop: 10
  }
});

export default SavedWordListScreen;
