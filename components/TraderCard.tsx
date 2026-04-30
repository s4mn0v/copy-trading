import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TradersStyles } from "../constants/TradersStyles";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

interface TraderProps {
  id: string;
  roi: string;
  drawdown: string;
  profit: string;
  spots: string;
  type: "LONG" | "SHORT";
}

export const TraderCard = ({
  id,
  roi,
  drawdown,
  profit,
  spots,
  type,
}: TraderProps) => {
  const router = useRouter();

  const isLong = type === "LONG";
  const typeColor = isLong ? Colors.secondary : Colors.error;
  const typeBg = isLong ? "rgba(0, 165, 114, 0.1)" : "rgba(255, 180, 171, 0.1)";

  return (
    <View style={TradersStyles.card}>
      {/* Header */}
      <View style={TradersStyles.header}>
        <View style={TradersStyles.idSection}>
          <View style={TradersStyles.avatarBox}>
            <MaterialIcons name="account-circle" size={24} color="#8b90a0" />
          </View>
          <View>
            <Text style={TradersStyles.labelCaps}>Trader ID</Text>
            <Text style={TradersStyles.traderId}>{id}</Text>
          </View>
        </View>

        <View
          style={[
            TradersStyles.badge,
            { backgroundColor: typeBg, borderColor: `${typeColor}33` },
          ]}
        >
          <MaterialIcons
            name={isLong ? "trending-up" : "trending-down"}
            size={14}
            color={typeColor}
          />
          <Text style={[TradersStyles.badgeText, { color: typeColor }]}>
            {type}
          </Text>
        </View>
      </View>

      {/* Follower Profit Row */}
      <View style={TradersStyles.profitRow}>
        <Text style={TradersStyles.labelCaps}>Follower Total Profit</Text>
        <Text style={TradersStyles.profitValue}>+{profit} USDT</Text>
      </View>

      {/* Stats Grid */}
      <View style={TradersStyles.statsGrid}>
        <View>
          <Text style={TradersStyles.labelCaps}>ROI (30D)</Text>
          <Text style={[TradersStyles.statValue, { color: Colors.secondary }]}>
            {roi}
          </Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={TradersStyles.labelCaps}>Max Drawdown</Text>
          <Text style={[TradersStyles.statValue, { color: Colors.error }]}>
            {drawdown}
          </Text>
        </View>
      </View>

      {/* FIXED LINE: Use TradersStyles instead of styles */}
      <Text style={TradersStyles.spotsText}>{spots}</Text>

      {/* Footer Buttons */}
      <View style={TradersStyles.buttonRow}>
        <TouchableOpacity
          style={TradersStyles.detailsButton}
          onPress={() => router.push(`/trader/${id}`)}
        >
          <MaterialIcons name="visibility" size={16} color="#FFF" />
          <Text style={TradersStyles.buttonText}>DETAILS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={TradersStyles.copyButton}>
          <MaterialIcons name="add" size={18} color="#FFF" />
          <Text style={TradersStyles.buttonText}>COPY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
