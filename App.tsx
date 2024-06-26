import "@/locales/i18n.config";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomepageScreen from "navigations/HomepageScreen";
import {
  GameOverScreen,
  GameScreen,
  ScoresScreen,
  StartScreen,
  SuccessScreen,
  WelcomePage
} from "navigations/index";

const Stack = createNativeStackNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = "#FAFEF2";

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      {/* <StatusBar
        animated={true}
        // backgroundColor="#61dafb"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        hidden={false}
      /> */}
      <Stack.Navigator
        initialRouteName="WelcomePage"
        screenOptions={{
          headerBackVisible: false,
          headerShown: false
        }}
      >
        <Stack.Screen component={WelcomePage} name="WelcomePage" />
        <Stack.Screen component={HomepageScreen} name="HomepageScreen" />
        <Stack.Screen component={StartScreen} name="StartScreen" />
        <Stack.Screen component={GameScreen} name="GameScreen" />
        <Stack.Screen component={GameOverScreen} name="GameOverScreen" />
        <Stack.Screen component={ScoresScreen} name="ScoresScreen" />
        <Stack.Screen component={SuccessScreen} name="SuccessScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
