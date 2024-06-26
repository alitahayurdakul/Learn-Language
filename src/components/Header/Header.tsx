import React, { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { LanguageModal } from "components/common/LanguageModal";

import { FontAwesome } from "@expo/vector-icons";

interface IPropsTypes {
  headerName: string;
}

const Header = ({ headerName }: IPropsTypes) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <FontAwesome
        name="language"
        size={24}
        color="black"
        style={styles.languageIconContainer}
        onPress={() => setIsVisible(true)}
      />

      <Text style={styles.text}>{headerName}</Text>
      <Modal
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
        animationType="slide"
        statusBarTranslucent={false}
      >
        <LanguageModal />
      </Modal>

      {/* <Text style={styles.text} onPress={() => onChange("en")}>
        En
      </Text>
      <Text style={styles.text} onPress={() => onChange("tr")}>
        Tr
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  languageIconContainer: {
    textAlign: "right",
    paddingEnd: 20,
    paddingTop: 20,
    color: "#1700FD"
  },
  text: {
    fontSize: 50,
    color: "#1700FD",
    alignSelf: "center",
    paddingBottom: 40,
    fontWeight: "600"
  }
});

export default Header;
