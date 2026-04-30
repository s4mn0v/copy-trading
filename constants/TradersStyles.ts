import { StyleSheet, Platform } from "react-native";
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
  avatarBox: {
    width: 40,
    height: 40,
    backgroundColor: "#2a2a2a",
    borderWidth: 1,
    borderColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
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
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  // New Profit Section
  profitRow: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingBottom: 16,
    marginBottom: 16,
  },
  profitValue: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.secondary,
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace",
    marginTop: 4,
  },
  // Grid for ROI and DD
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statValue: {
    fontSize: 28,
    fontWeight: "600",
    marginTop: 4,
  },
  spotsText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#8b90a0",
    textAlign: "right",
    textTransform: "uppercase",
    marginBottom: 12,
  },
  // Buttons
  buttonRow: {
    flexDirection: "row",
    gap: 8,
  },
  detailsButton: {
    flex: 1,
    backgroundColor: "#2a2a2a",
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  copyButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
  },
});
