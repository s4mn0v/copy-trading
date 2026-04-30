import React, { useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { Svg, Rect, Path } from "react-native-svg";
import { MaterialIcons } from "@expo/vector-icons";
import { ProfileStyles as styles } from "../../constants/TraderProfileStyles";
import { Colors } from "@/constants/Colors";

export default function TraderProfile() {
  const scrollViewRef = useRef<ScrollView>(null);

  const weeklyPerformance = [
    { day: "MON", val: "40%", color: Colors.secondary },
    { day: "TUE", val: "65%", color: Colors.secondary },
    { day: "WED", val: "55%", color: Colors.secondary },
    { day: "THU", val: "30%", color: Colors.error },
    { day: "FRI", val: "80%", color: Colors.secondary },
    { day: "SAT", val: "95%", color: Colors.secondary },
    { day: "SUN", val: "70%", color: Colors.secondary },
  ];

  const handleFocus = () => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
    >
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {/* 1. SQUARED FOCAL POINT CARD */}
        <View style={styles.focalCard}>
          <View style={styles.avatarBox}>
            <Svg width="60" height="60" viewBox="0 0 80 80">
              <Rect x="10" y="10" width="10" height="10" fill="#404040" />
              <Rect
                x="30"
                y="30"
                width="20"
                height="20"
                stroke={Colors.primary}
                strokeWidth="2"
              />
              <Rect
                x="60"
                y="60"
                width="10"
                height="10"
                fill={Colors.primary}
                fillOpacity="0.5"
              />
              <Path
                d="M0 0L80 80M80 0L0 80"
                stroke="#262626"
                strokeWidth="0.5"
              />
            </Svg>
          </View>

          <Text style={styles.unitLabel}>TRADER UNIT</Text>
          <Text style={styles.unitTitle}>TRDR-992-SIGMA</Text>

          <View style={styles.roiContainer}>
            <Text style={styles.roiLarge}>+248%</Text>
            <Text style={styles.roiLabel}>ROI</Text>
          </View>

          <View style={styles.unitFooter}>
            <View style={styles.footerItem}>
              <Text style={styles.unitLabel}>RISK</Text>
              <Text style={[styles.footerValue, { color: Colors.secondary }]}>
                LOW
              </Text>
            </View>
            <View style={styles.vSeparator} />
            <View style={styles.footerItem}>
              <Text style={styles.unitLabel}>STATUS</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.statusDot} />
                <Text style={styles.footerValue}>ACTIVE</Text>
              </View>
            </View>
            <View style={styles.vSeparator} />
            <View style={styles.footerItem}>
              <Text style={styles.unitLabel}>SPOTS</Text>
              <Text style={styles.footerValue}>240/300</Text>
            </View>
          </View>
        </View>

        {/* 2. HORIZONTAL STATS ROW */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>PROFIT</Text>
            <Text style={styles.statValue}>14.2K</Text>
          </View>
          <View style={styles.vSeparator} />
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>WIN RATE</Text>
            <Text style={styles.statValue}>82%</Text>
          </View>
          <View style={styles.vSeparator} />
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>FOLLOWERS</Text>
            <Text style={styles.statValue}>1.2K</Text>
          </View>
        </View>

        {/* 3. PERFORMANCE CHART SECTION */}
        <View style={styles.sectionCard}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <Text style={styles.tableTitle}>LAST WEEK ROI PERFORMANCE</Text>
            <MaterialIcons name="query-stats" size={16} color="#8b90a0" />
          </View>

          <View
            style={{
              height: 120,
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            {weeklyPerformance.map((item, idx) => (
              <View key={idx} style={{ alignItems: "center", flex: 1 }}>
                <View
                  style={{
                    width: "70%",
                    // height: item.val,
                    backgroundColor: `${item.color}30`,
                    borderTopWidth: 2,
                    borderColor: item.color,
                  }}
                />
                <Text style={{ color: "#8b90a0", fontSize: 8, marginTop: 8 }}>
                  {item.day}
                </Text>
              </View>
            ))}
          </View>

          {/* NEW: FOLLOWER TOTAL PROFIT */}
          <View style={styles.followerProfitSection}>
            <Text style={styles.unitLabel}>FOLLOWER TOTAL PROFIT</Text>
            <Text style={styles.followerProfitValue}>+$42,108.00</Text>
          </View>
        </View>

        {/* 4. LIVE POSITIONS (3-COLUMN LAYOUT) */}
        <View style={styles.sectionCard}>
          <Text style={styles.tableTitle}>Live Positions</Text>
          <View style={styles.positionsScrollArea}>
            <ScrollView nestedScrollEnabled persistentScrollbar>
              <PositionRow
                symbol="BTCUSDT"
                side="LONG 50X"
                entry="64,281.40"
                pl="+12.4%"
                color={Colors.secondary}
              />
              <PositionRow
                symbol="ETHUSDT"
                side="SHORT 20X"
                entry="3,452.12"
                pl="-4.2%"
                color={Colors.error}
              />
              <PositionRow
                symbol="SOLUSDT"
                side="LONG 10X"
                entry="142.05"
                pl="+2.8%"
                color={Colors.secondary}
              />
              <PositionRow
                symbol="DOTUSDT"
                side="LONG 5X"
                entry="7.12"
                pl="+1.5%"
                color={Colors.secondary}
              />
            </ScrollView>
          </View>
        </View>

        {/* 5. RECENT TRADE HISTORY */}
        <View style={styles.sectionCard}>
          <Text style={styles.tableTitle}>Recent Trade History</Text>
          <HistoryRow
            symbol="BTCUSDT"
            profit="+1,240.50"
            time="14:22"
            color={Colors.secondary}
          />
          <HistoryRow
            symbol="ETHUSDT"
            profit="+422.10"
            time="10:15"
            color={Colors.secondary}
          />
          <HistoryRow
            symbol="LINKUSDT"
            profit="-105.20"
            time="23:45"
            color={Colors.error}
          />
        </View>

        {/* 6. DIRECT COPY EXECUTION (REMAINS SAME) */}
        <View style={styles.executionCard}>
          <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "700" }}>
            Direct Copy Execution
          </Text>
          <View style={styles.inputWrapper}>
            <Text
              style={{
                color: "#8b90a0",
                paddingLeft: 16,
                fontSize: 12,
                fontWeight: "700",
              }}
            >
              USDT
            </Text>
            <TextInput
              style={styles.input}
              placeholder="0.00"
              placeholderTextColor="#404040"
              keyboardType="numeric"
              onFocus={handleFocus}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              padding: 16,
              alignItems: "center",
            }}
            activeOpacity={0.8}
            onPress={() => Keyboard.dismiss()}
          >
            <Text style={{ color: Colors.background, fontWeight: "800" }}>
              CONFIRM EXECUTION
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// 3-COLUMN POSITION ROW
const PositionRow = ({ symbol, side, entry, pl, color }: any) => (
  <View style={styles.tableRow}>
    <View style={styles.colLeft}>
      <Text style={{ color: "#FFF", fontWeight: "600", fontSize: 13 }}>
        {symbol}
      </Text>
      <Text style={{ color, fontSize: 10, fontWeight: "700" }}>{side}</Text>
    </View>
    <View style={styles.colCenter}>
      <Text style={{ color: "#c1c6d7", fontSize: 13 }}>{entry}</Text>
      <Text style={{ color: "#8b90a0", fontSize: 10 }}>ENTRY</Text>
    </View>
    <View style={styles.colRight}>
      <Text style={{ color, fontSize: 13, fontWeight: "700" }}>{pl}</Text>
      <Text style={{ color: "#8b90a0", fontSize: 10 }}>P/L %</Text>
    </View>
  </View>
);

const HistoryRow = ({ symbol, profit, time, color }: any) => (
  <View style={styles.tableRow}>
    <Text style={{ color: "#FFF", fontWeight: "500", flex: 1, fontSize: 13 }}>
      {symbol}
    </Text>
    <Text
      style={{
        color,
        fontWeight: "700",
        flex: 1,
        textAlign: "center",
        fontSize: 13,
      }}
    >
      {profit}
    </Text>
    <Text
      style={{ color: "#8b90a0", fontSize: 10, flex: 1, textAlign: "right" }}
    >
      {time}
    </Text>
  </View>
);
