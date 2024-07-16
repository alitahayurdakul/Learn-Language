import { StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { IScoreDataTypes } from "types/HomepageTypes";

interface IPropsTypes {
  scoreDetail: IScoreDataTypes;
  order: number | string;
}

export const ScoreDetail = ({ scoreDetail, order }: IPropsTypes) => {
  const { t } = useTranslation("translation");

  return (
    <View style={styles.row}>
      <Text style={{ ...styles.orderText, ...styles.cell }}>{order}</Text>
      <Text style={styles.cell}>{scoreDetail.score}</Text>
      <Text style={{ ...styles.cell, ...styles.wideCell }}>
        {t(`gameType.${scoreDetail.gameType}`)}
      </Text>
      <Text style={{ ...styles.cell, ...styles.dateCell }}>
        {scoreDetail.date}
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
    flex: 1,
    padding: 10,
    textAlign: "center",
    fontSize: 15
  },
  orderText: {
    fontWeight: "bold"
  },
  wideCell: {
    flex: 1.5
  },
  dateCell: {
    flex: 2
  }
});
