import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import HomeBody from "components/Homepage/HomeBody";
import { StyleSheet, Text, View } from "react-native";


const HomepageScreen = () => {
    return (
        <View style={styles.container} >
            <View>
                <Header headerName="English Game" />
                <HomeBody />
            </View>
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 50
    }
})

export default HomepageScreen;