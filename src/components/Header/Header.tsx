import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

interface IPropsTypes {
    headerName: string
}
const Header = ({headerName}: IPropsTypes) => {
    const {t, i18n} = useTranslation();
    const onChange = (lang: string) => {
        i18n.changeLanguage(lang);
    }
    return(
        <View style={styles.container} >
            <Text style={styles.text} >{headerName}</Text>
            <Text style={styles.text} onPress={() => onChange('en')}  >En</Text>
            <Text style={styles.text} onPress={() => onChange('tr')}  >Tr</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    text: {
        fontSize: 50,
        color: 'white',
        alignSelf: 'center',
        paddingBottom: 40
    }
})

export default Header;