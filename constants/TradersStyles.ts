import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const TradersStyles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 24,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  idSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  labelCaps: {
    fontSize: 10,
    fontWeight: "700",
    color: "#8b90a0",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  traderId: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.textMain,
  },
  badge: {
    backgroundColor: "rgba(0, 165, 114, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(78, 222, 163, 0.2)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  badgeText: {
    fontSize: 9,
    color: "#4edea3",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  statValueROI: {
    fontSize: 28,
    fontWeight: "600",
    color: Colors.primary,
  },
  statValueDD: {
    fontSize: 28,
    fontWeight: "600",
    color: "#ffb3ad",
  },
  divider: {
    height: 1,
    backgroundColor: "#1A1A1A",
    width: "100%",
    marginVertical: 16,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12, // Space between buttons
    marginTop: 10,
  },
  secondaryButton: {
    flex: 1, // Takes half the width
    backgroundColor: "transparent",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  copyButton: {
    flex: 1, // Takes half the width
    backgroundColor: Colors.primaryMuted,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.primaryMuted,
    flexDirection: "row",
    gap: 8,
  },
  secondaryButtonText: {
    color: Colors.textMuted,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
  },
  copyButtonText: {
    color: Colors.background,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
  },
});
