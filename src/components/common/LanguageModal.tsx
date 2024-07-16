import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ILanguageListTypes, LANGUAGE_LIST } from "const/LanguageList";
import { useTranslation } from "react-i18next";
import Icon from "react-native-ico-flags";

import { AntDesign } from "@expo/vector-icons";

export const LanguageModal = () => {
  const { t } = useTranslation("translation", { keyPrefix: "language" });
  const { i18n } = useTranslation();

  const onSelectLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    console.log(i18n.language);
  };

  return (
    <View style={styles.languageModalContainer}>
      <Text style={styles.titleText}>{t("title")}</Text>
      <Text style={styles.titleDescription}>{t("description")}</Text>
      <ScrollView>
        <View style={styles.languageListContainer}>
          {LANGUAGE_LIST.map((language: ILanguageListTypes, index: number) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={[
                  styles.language,
                  i18n.language === language.name && styles.activeLanguage
                ]}
                onPress={() => onSelectLanguage(language.name)}
              >
                <View style={styles.languageLeftSection}>
                  <Icon name={language.flag} height="35" width="35" />
                  <Text style={styles.languageText}>{t(language.name)}</Text>
                </View>
                {i18n.language === language.name && (
                  <AntDesign name="check" size={30} color="#009416" />
                )}
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
    padding: 20
  },
  titleText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 25
    // color: "gray",
  },
  titleDescription: {
    textAlign: "center",
    color: "gray",
    lineHeight: 20
  },
  languageListContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 15
  },
  language: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#fff"
  },
  activeLanguage: {
    borderColor: "#0045FD",
    borderWidth: 1
  },
  languageLeftSection: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 20
  },
  languageText: {
    fontWeight: "600",
    fontSize: 17
  }
});
