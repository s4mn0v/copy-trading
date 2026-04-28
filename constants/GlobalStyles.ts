import { StyleSheet, Platform, StatusBar } from "react-native";
import { Colors } from "./Colors";

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    zIndex: 1, // Ensures content stays above background dots
  },
  label: {
    fontSize: 11,
    fontWeight: "700",
    color: Colors.textMuted,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: Colors.textMain,
    letterSpacing: -1,
  },
});
