import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { IHomePageMenuDataTypes } from "types/HomepageTypes";

import { useNavigation } from "@react-navigation/native";

const Item = ({ data }: { data: IHomePageMenuDataTypes }) => {
  const { t } = useTranslation("translation");
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(data.routePageName, {
          type: data.key
        })
      }
      style={styles.itemContainer}
    >
      <Text style={styles.itemText}>{t(data.key)}</Text>
    </TouchableOpacity>
  );
};

const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#0045FD",
    marginVertical: 10,
    padding: 20,
    borderRadius: (windowWidth * 0.2) / 2
  },
  itemText: {
    fontSize: 20,
    color: "#FAFEF2",
    fontWeight: "600"
  }
});

export default Item;
