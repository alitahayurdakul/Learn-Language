import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { ISavedWordDataType } from "types/HomepageTypes";

interface IPropsTypes {
  savedWord: ISavedWordDataType;
}

export const SavedWordDetail = ({ savedWord }: IPropsTypes) => {
  const { t } = useTranslation("translation");

  return (
    <View style={styles.row}>
      <Text style={{ ...styles.cell, ...styles.wideCell }}>
        {savedWord.word}
      </Text>
      <Text style={{ ...styles.cell, ...styles.wideCell }}>
        {savedWord.translationWord}
      </Text>
      <Text style={{ ...styles.cell, ...{ flex: 1 } }}>
        {t(`gameType.${savedWord.translationLangs}`)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  cell: {
    padding: 10,
    textAlign: "center",
    fontSize: 15
  },
  wideCell: {
    flex: 1.5
  }
});
