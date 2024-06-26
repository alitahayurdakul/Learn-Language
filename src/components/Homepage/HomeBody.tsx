import React from "react";
import { StyleSheet, View } from "react-native";
import { HomePageMenuDatas } from "const/HomepageMenu";
import { IHomePageMenuDataTypes } from "types/HomepageTypes";

import Item from "@/components/common/MenuItem";

const HomeBody = () => (
  <View style={styles.container}>
    {HomePageMenuDatas.map((data: IHomePageMenuDataTypes, index: number) => (
      <React.Fragment key={index}>
        <Item data={data} />
      </React.Fragment>
    ))}
    {/* <FlatList data={HomePageMenuDatas} keyExtractor={(data: IHomePageMenuDataTypes) => data.key} 
    renderItem={({ item }) => <Item data={item} />} />
     */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center"
  }
});

export default HomeBody;
