import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { IHomePageMenuDataTypes } from "types/HomepageTypes";

const Item = ({ data }: { data: IHomePageMenuDataTypes }) => {
    const { t } = useTranslation();
    const navigation = useNavigation<any>();

    return <TouchableOpacity onPress={() => navigation.navigate(data.routePageName, {
        type: data.key
    })} style={styles.itemContainer}>
        <Text >{t(data.key)}</Text>
    </TouchableOpacity>
}

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'white',
        marginVertical: 10,
        padding: 20,
        borderRadius: (windowWidth * 0.2) / 2,
    },
    itemText: {
        fontSize: 20,
        color: 'red'
    }
});

export default Item;