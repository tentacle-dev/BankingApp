import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

import "../global.css";
import { View,StatusBar } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#1E1E1E" }}>
      <StatusBar backgroundColor="#0b2adb" barStyle="light-content" />
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: "#0b2adb", // Set your desired background color
      },
      headerTintColor: "#FFFFFF", // Set title text color
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}>
      <Stack.Screen name="index" options={{ title: "Sign In" }} />
    </Stack>
    </View>
  );
}
