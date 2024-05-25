import { HomePageMenuDatas } from "const/HomepageMenu";
import { FlatList, StyleSheet, View } from "react-native"
import { IHomePageMenuDataTypes } from "types/HomepageTypes";
import Item from '@/components/common/MenuItem';

const HomeBody = () => {
    return (
        <View style={styles.container} >
            <FlatList data={HomePageMenuDatas} keyExtractor={(data: IHomePageMenuDataTypes) => data.key} renderItem={({ item }) => <Item data={item} />} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignSelf: 'center',
    }
});

export default HomeBody;