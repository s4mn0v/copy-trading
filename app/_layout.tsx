import { Stack } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

// 1. Define your global colors here
const MyGlobalTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#050505", // Global background
    primary: "#007AFF", // Global blue accent
    card: "#121212", // Global background for Headers/Tabs
    text: "#FFFFFF", // Global text color
    border: "#262626", // Global border color
  },
};

export default function RootLayout() {
  return (
    // 2. Wrap the app in the ThemeProvider
    <ThemeProvider value={MyGlobalTheme}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#050505" },
          headerTintColor: "#fff",
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
