import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import mainTabs from "./navigation/mainTabs";
import { Messages, User } from "./screens";
import useColorScheme from './hooks/useColorScheme';

const Stack = createStackNavigator();

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={mainTabs} />
          <Stack.Screen name="Messages" component={Messages} />
          <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar />
    </SafeAreaProvider>
  )
}

export default App;