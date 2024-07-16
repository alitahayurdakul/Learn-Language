import { useEffect } from "react";
import { BackHandler } from "react-native";

export const useGoBackHandler = (
  navigation?: any,
  navigationScreen?: string
): void => {
  useEffect(() => {
    const backAction = () => {
      if (navigationScreen && navigation) {
        navigation.navigate(navigationScreen);
      } else {
        null;
      }

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [navigation, navigationScreen]);
};
