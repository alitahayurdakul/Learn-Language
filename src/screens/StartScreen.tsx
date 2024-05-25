import Footer from "components/Footer/Footer";
import StartScreenBody from "components/StartScreen/StartScreenBody";
import { StyleSheet, View } from "react-native"
import Header from "@/components/Header/Header";

const StartScreen = () => {
    return(
        <View style={styles.container} >
            <View>
                <Header headerName="English Game" />
                <StartScreenBody />
            </View>
            <Footer />
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 50
    }
});

export default StartScreen;