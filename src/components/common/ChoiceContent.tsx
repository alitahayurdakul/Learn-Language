import { useTranslation } from "react-i18next";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { IGameOptionType } from "types/HomepageTypes";

const ChoiceContent = ({ data, clickFn, wrongAnswer }: { data: IGameOptionType, clickFn: any, wrongAnswer: string }) => {
    const { t } = useTranslation();

    return <TouchableOpacity style={styles.itemContainer} onPress={() => clickFn(data.key)} >
        {
            (wrongAnswer === data.key) && <AntDesign name="closecircleo" size={24} color="red" />
        }
        <Text>{t(data.content)}</Text>
    </TouchableOpacity>
}

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'white',
        marginVertical: 10,
        padding: 20,
        borderRadius: (windowWidth * 0.2) / 2,
        display: 'flex',
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemText: {
        fontSize: 20,
        color: 'red'
    }
});

export default ChoiceContent;