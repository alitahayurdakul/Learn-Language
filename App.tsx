import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from 'screens/WelcomePage';
import HomepageScreen from 'screens/HomepageScreen';
import StartScreen from 'screens/StartScreen';
import GameScreen from 'screens/GameScreen';
import GameOverScreen from 'screens/GameOverScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
