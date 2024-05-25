import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from 'screens/WelcomePage';
import HomepageScreen from 'screens/HomepageScreen';
import StartScreen from 'screens/StartScreen';
import GameScreen from 'screens/GameScreen';

import '@/locales/i18n.config';
import GameOverScreen from 'screens/GameOverScreen';

const Stack = createNativeStackNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = 'black'

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator initialRouteName='WelcomePage'>
        <Stack.Screen component={WelcomePage} name="WelcomePage" />
        <Stack.Screen component={HomepageScreen} name="HomepageScreen" />
        <Stack.Screen component={StartScreen} name="StartScreen" />
        <Stack.Screen component={GameScreen} name="GameScreen" />
        <Stack.Screen component={GameOverScreen} name="GameOverScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
