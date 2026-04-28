import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { TradersStyles } from "../constants/TradersStyles";
import { Colors } from "@/constants/Colors";

interface TraderProps {
  id: string;
  roi: string;
  drawdown: string;
  isWhale: boolean;
  type: "LONG" | "SHORT";
}

export const TraderCard = ({
  id,
  roi,
  drawdown,
  isWhale,
  type,
}: TraderProps) => {
  return (
    <View style={TradersStyles.card}>
      {/* Header */}
      <View style={TradersStyles.header}>
        <View style={TradersStyles.idSection}>
          <View>
            <Text style={TradersStyles.labelCaps}>Trader ID</Text>
            <Text style={TradersStyles.traderId}>{id}</Text>
          </View>
        </View>

        {isWhale && (
          <View style={TradersStyles.badge}>
            <MaterialIcons name="water-drop" size={12} color="#4edea3" />
            <Text style={TradersStyles.badgeText}>Whale Aligned</Text>
          </View>
        )}
      </View>

      {/* Stats */}
      <View style={TradersStyles.statsGrid}>
        <View>
          <Text style={TradersStyles.labelCaps}>ROI (30D)</Text>
          <Text style={TradersStyles.statValueROI}>{roi}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={TradersStyles.labelCaps}>Max Drawdown</Text>
          <Text style={TradersStyles.statValueDD}>{drawdown}</Text>
        </View>
      </View>

      {/* Strategy Indicator */}
      <View style={TradersStyles.divider} />
      <View style={TradersStyles.footer}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <MaterialIcons
            name={type === "LONG" ? "trending-up" : "trending-down"}
            size={18}
            color={type === "LONG" ? "#4edea3" : "#ffb3ad"}
          />
          <Text style={[TradersStyles.labelCaps, { color: "#FFF" }]}>
            {type}
          </Text>
        </View>
        {/* Placeholder for Sparkline SVG */}
        <View style={{ width: 80, height: 30, backgroundColor: "#1A1A1A" }} />
      </View>

      <View style={TradersStyles.buttonRow}>
        <TouchableOpacity
          style={TradersStyles.secondaryButton}
          activeOpacity={0.7}
        >
          <Text style={TradersStyles.secondaryButtonText}>DETAILS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={TradersStyles.copyButton} activeOpacity={0.8}>
          <Ionicons name="copy-outline" size={16} color={Colors.background} />
          <Text style={TradersStyles.copyButtonText}>COPY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
