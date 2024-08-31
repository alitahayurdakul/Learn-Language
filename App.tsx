import "@/locales/i18n.config";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenEnums } from "enums/screenEnums";
import HomepageScreen from "navigations/HomepageScreen";
import {
  ForgotPasswordScreen,
  GameOverScreen,
  GameScreen,
  LoginScreen,
  PersonalInformationScreen,
  RegisterScreen,
  ScoresScreen,
  StartScreen,
  SuccessScreen,
  WelcomePage,
  SavedWordScreen
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
        initialRouteName={ScreenEnums.welcome}
        screenOptions={{
          headerBackVisible: false,
          headerShown: false
        }}
      >
        <Stack.Screen component={WelcomePage} name={ScreenEnums.welcome} />
        <Stack.Screen component={LoginScreen} name={ScreenEnums.login} />
        <Stack.Screen
          component={ForgotPasswordScreen}
          name={ScreenEnums.forgotPassword}
        />
        <Stack.Screen component={RegisterScreen} name={ScreenEnums.register} />
        <Stack.Screen component={HomepageScreen} name={ScreenEnums.homepage} />
        <Stack.Screen component={StartScreen} name={ScreenEnums.start} />
        <Stack.Screen component={GameScreen} name={ScreenEnums.game} />
        <Stack.Screen component={GameOverScreen} name={ScreenEnums.gameOver} />
        <Stack.Screen component={ScoresScreen} name={ScreenEnums.scoresList} />
        <Stack.Screen
          component={SavedWordScreen}
          name={ScreenEnums.savedWordList}
        />
        <Stack.Screen component={SuccessScreen} name={ScreenEnums.success} />
        <Stack.Screen
          component={PersonalInformationScreen}
          name={ScreenEnums.personalInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
