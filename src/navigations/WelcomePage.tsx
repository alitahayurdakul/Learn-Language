import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ScreenEnums } from "enums/screenEnums";

const WelcomePage = (props: any) => {
  const onClick = () => {
    props.navigation.navigate(ScreenEnums.login);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onClick}>
        <Text style={styles.text}>Get Started</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#1700FD",
    width: "80%",
    paddingVertical: 20,
    borderRadius: 30,
    alignSelf: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center"
  }
});

export default WelcomePage;
