import React from "react";
import { useTranslation } from "react-i18next";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-ico-flags";

import { ILanguageListTypes, LANGUAGE_LIST } from "const/LanguageList";

export const LanguageModal = () => {
  const { t } = useTranslation("translation", { keyPrefix: "language" });
  const { i18n } = useTranslation();

  const onSelectLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <View style={styles.languageModalContainer}>
      <Text style={styles.titleText}>{t("title")}</Text>
      <Text style={styles.titleDescription}>{t("description")}</Text>
      <ScrollView style={styles.languageListContainer}>
        <View style={styles.languageListContainer}>
          {LANGUAGE_LIST.map((language: ILanguageListTypes, index: number) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={styles.language}
                onPress={() => onSelectLanguage(language.name)}
              >
                <Icon name={language.flag} height="35" width="35" />
                <Text style={styles.languageText}>{t(language.name)}</Text>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  languageModalContainer: {
    flex: 1,
    backgroundColor: "#FAF8F8",
    display: "flex",
    gap: 20,
    padding: 20,
  },
  titleText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 25,
    // color: "gray",
  },
  titleDescription: {
    textAlign: "center",
    color: "gray",
    lineHeight: 20,
  },
  languageListContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  language: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  languageText: {
    fontWeight: "600",
    fontSize: 17,
  },
});
