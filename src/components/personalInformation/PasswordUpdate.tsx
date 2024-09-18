import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FormContainer from "components/common/Form";
import { PASSWORD_UPDATE_FORM_ELEMENTS } from "const/InformationUpdate";
import { FormNamesEnums } from "enums/screenEnums";
import { useTranslation } from "react-i18next";
import { PasswordUpdateValidation } from "utils/personalInformationValidation";

const commonColorDark = "#9900f5";

export const PasswordUpdate = (props: any) => {
  const { t } = useTranslation("translation");

  return (
    <View>
      <View style={styles.updatePasswordContainer}>
        <Text style={styles.header}>
          {t(`${FormNamesEnums.passwordUpdate}.header`)}
        </Text>
        <FormContainer
          navigation={props.navigation}
          elements={PASSWORD_UPDATE_FORM_ELEMENTS}
          validationSchema={PasswordUpdateValidation(t)}
          t={t}
          formKey={FormNamesEnums.passwordUpdate}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  updatePasswordContainer: {
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
