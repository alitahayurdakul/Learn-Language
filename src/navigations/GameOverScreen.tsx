import Item from "components/common/MenuItem";
import { FlatList, StyleSheet, Text, View } from "react-native"
import { IHomePageMenuDataTypes } from "types/HomepageTypes";
import { MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from "react-i18next";


const GameOverMenu: IHomePageMenuDataTypes[] = [
    {
        key: "homepage",
        routePageName: "HomepageScreen"
    },
    {
        key: "reloadGame",
        routePageName: "StartScreen"
    }
]

const GameOverScreen = () => {
    const { t } = useTranslation("translation")
    return (
        <View style={styles.container} >
            <View style={styles.notificationContainer} >
                <MaterialIcons name="error-outline" size={100} color="red" />
                <Text style={styles.textStyle} >
                    {t("gameOver")}
                </Text>
            </View>
            <View >
                <FlatList data={GameOverMenu} renderItem={({ item }) => <Item data={item} />} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 30,
        width: '80%',
        marginHorizontal: '10%',
        // height: '100%',
        // alignItems: "center",
        justifyContent: "center"
    },
    notificationContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textStyle: {
        color: 'red',
        fontSize: 30
    }
});

export default GameOverScreen;