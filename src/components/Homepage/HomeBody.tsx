import React from "react";
import { StyleSheet, View } from "react-native";

import { IHomePageMenuDataTypes } from "types/HomepageTypes";
import Item from "@/components/common/MenuItem";

import { HomePageMenuDatas } from "const/HomepageMenu";

const HomeBody = () => {
  return (
    <View style={styles.container}>
      {HomePageMenuDatas.map((data: IHomePageMenuDataTypes, index: number) => (
        <React.Fragment key={index}>
          <Item data={data} />
        </React.Fragment>
      ))}
      {/* <FlatList data={HomePageMenuDatas} keyExtractor={(data: IHomePageMenuDataTypes) => data.key} renderItem={({ item }) => <Item data={item} />} />
       */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center",
  }
});

export default HomeBody;
