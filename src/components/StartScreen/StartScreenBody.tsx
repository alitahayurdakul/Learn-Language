import { FlatList, StyleSheet, View } from "react-native";
import Item from "components/common/MenuItem";
import { StartMenuDatas } from "const/StartMenu";
import { IHomePageMenuDataTypes } from "types/HomepageTypes";

const StartScreenBody = () => (
  <View style={styles.container}>
    <FlatList
      data={StartMenuDatas}
      keyExtractor={(data: IHomePageMenuDataTypes) => data.key}
      renderItem={({ item }) => <Item data={item} />}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center"
  }
});

export default StartScreenBody;
