import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from 'navigations/WelcomePage';
import HomepageScreen from 'navigations/HomepageScreen';
import StartScreen from 'navigations/StartScreen';
import GameScreen from 'navigations/GameScreen';
import GameOverScreen from 'navigations/GameOverScreen';
import ScoresScreen from 'navigations/ScoresScreen';

import '@/locales/i18n.config';

const Stack = createNativeStackNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = '#FAFEF2'

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
      <Stack.Navigator initialRouteName='WelcomePage' screenOptions={{
        headerBackVisible: false,
        headerShown: false
      }}>
        <Stack.Screen component={WelcomePage} name="WelcomePage" />
        <Stack.Screen component={HomepageScreen} name="HomepageScreen" />
        <Stack.Screen component={StartScreen} name="StartScreen" />
        <Stack.Screen component={GameScreen} name="GameScreen" />
        <Stack.Screen component={GameOverScreen} name="GameOverScreen" />
        <Stack.Screen component={ScoresScreen} name="ScoresScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
