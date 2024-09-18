import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FormContainer from "components/common/Form";
import { PERSONAL_INFORMATION_FORM_ELEMENTS } from "const/PersonalInformation";
import { FormNamesEnums } from "enums/screenEnums";
import { useTranslation } from "react-i18next";
import { PersonalInformationValidation } from "utils/personalInformationValidation";

const commonColorDark = "#9900f5";

export const PersonalInformationUpdate = (props: any) => {
  const { t } = useTranslation("translation");

  return (
    <View>
      <View style={styles.personalInformationContainer}>
        <Text style={styles.header}>
          {t("personal-information-update.header")}
        </Text>
        <FormContainer
          navigation={props.navigation}
          elements={PERSONAL_INFORMATION_FORM_ELEMENTS}
          validationSchema={PersonalInformationValidation(t)}
          t={t}
          formKey={FormNamesEnums.personalInfoUpdate}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  personalInformationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  header: {
    fontSize: 25,
    color: commonColorDark,
    paddingBottom: 20,
    fontWeight: "600"
  }
});
