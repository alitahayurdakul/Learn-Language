import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native"

const WelcomePage = (props:any) => {

    const onClick = () => {
        props.navigation.navigate('HomepageScreen')
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onClick}>
                <Text style={styles.text}>
                    Get Started
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#1700FD',
        width: '80%',
        paddingVertical: 20,
        borderRadius: 30,
        alignSelf: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center'
    }
})

export default WelcomePage;