import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import { MaterialIcons } from "@expo/vector-icons";
import { DotBackground } from "@/components/DotBackground";
import { GlobalStyles } from "@/constants/GlobalStyles";
import { SettingsStyles as styles } from "@/constants/SettingsStyles";
import { Colors } from "@/constants/Colors";

export default function SettingsScreen() {
  const [showSecret, setShowSecret] = useState(false);
  const [marginMode, setMarginMode] = useState("follow");
  const [leverageType, setLeverageType] = useState("fixed");
  const [leverageValue, setLeverageValue] = useState(10);

  return (
    <View style={GlobalStyles.container}>
      <DotBackground />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={[GlobalStyles.title, { marginBottom: 32, marginTop: 20 }]}>
          Settings
        </Text>

        {/* 1. API CONFIGURATION */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionLabel}>API Configuration</Text>
            <View style={styles.badgeRow}>
              <View style={styles.verifiedBadge}>
                <MaterialIcons
                  name="verified"
                  size={12}
                  color={Colors.secondary}
                />
                <Text style={styles.badgeText}>Futures</Text>
              </View>
              <View style={styles.verifiedBadge}>
                <MaterialIcons
                  name="verified"
                  size={12}
                  color={Colors.secondary}
                />
                <Text style={styles.badgeText}>Copy</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>API Key</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value="38f92j-92kf-29kf-92kf-29kf92kf"
                  placeholderTextColor="#404040"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>API Secret</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={!showSecret}
                  value="mysupersecretkey"
                />
                <TouchableOpacity
                  onPress={() => setShowSecret(!showSecret)}
                  style={{ padding: 12 }}
                >
                  <MaterialIcons
                    name={showSecret ? "visibility" : "visibility-off"}
                    size={20}
                    color="#8b90a0"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Passphrase</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  value="passphrase123"
                />
              </View>
            </View>
          </View>
        </View>

        {/* 2. TRADING PARAMETERS */}
        <View style={styles.section}>
          <Text style={[styles.sectionLabel, { marginBottom: 16 }]}>
            Trading Parameters
          </Text>

          <View style={styles.bentoGrid}>
            {/* Amount per Trade */}
            <View style={styles.bentoCard}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <Text style={styles.inputLabel}>Amount per Trade</Text>
                <MaterialIcons name="info-outline" size={14} color="#ffd700" />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input, styles.amountInput]}
                  keyboardType="numeric"
                  defaultValue="500"
                />
                <Text style={styles.currencyLabel}>USDT</Text>
              </View>
              <Text
                style={{
                  color: "#8b90a0",
                  fontSize: 10,
                  marginTop: 8,
                  fontStyle: "italic",
                }}
              >
                Min: 50 USDT
              </Text>
            </View>

            {/* Margin Mode Selector */}
            <View style={styles.bentoCard}>
              <Text style={[styles.inputLabel, { marginBottom: 16 }]}>
                Margin Mode
              </Text>
              <MarginOption
                label="Follow Trader"
                isActive={marginMode === "follow"}
                onPress={() => setMarginMode("follow")}
              />
              <MarginOption
                label="Cross Margin"
                isActive={marginMode === "cross"}
                onPress={() => setMarginMode("cross")}
              />
              <MarginOption
                label="Isolated Margin"
                isActive={marginMode === "isolated"}
                onPress={() => setMarginMode("isolated")}
              />
            </View>

            {/* Leverage */}
            <View style={[styles.bentoCard, styles.leverageCard]}>
              <Text style={[styles.inputLabel, { marginBottom: 20 }]}>
                Leverage Configuration
              </Text>

              <View style={styles.leverageToggleContainer}>
                <TouchableOpacity
                  style={styles.radioButton}
                  onPress={() => setLeverageType("fixed")}
                >
                  <View
                    style={[
                      styles.radioCircle,
                      leverageType === "fixed" && styles.radioCircleActive,
                    ]}
                  >
                    {leverageType === "fixed" && (
                      <View style={styles.radioInner} />
                    )}
                  </View>
                  <Text
                    style={[
                      styles.modeText,
                      leverageType === "fixed" && styles.modeTextActive,
                    ]}
                  >
                    Fixed Leverage
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.radioButton}
                  onPress={() => setLeverageType("trader")}
                >
                  <View
                    style={[
                      styles.radioCircle,
                      leverageType === "trader" && styles.radioCircleActive,
                    ]}
                  >
                    {leverageType === "trader" && (
                      <View style={styles.radioInner} />
                    )}
                  </View>
                  <Text
                    style={[
                      styles.modeText,
                      leverageType === "trader" && styles.modeTextActive,
                    ]}
                  >
                    Trader`s Leverage
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Slider Section - only active if type is fixed */}
              <View
                style={[
                  styles.leverageDisplayArea,
                  leverageType === "trader" && { opacity: 0.3 },
                ]}
              >
                <Text style={styles.leverageValueText}>{leverageValue}x</Text>

                <Slider
                  style={styles.sliderTrack}
                  minimumValue={1}
                  maximumValue={125}
                  step={1}
                  value={leverageValue}
                  onValueChange={setLeverageValue}
                  disabled={leverageType === "trader"}
                  minimumTrackTintColor={Colors.primary}
                  maximumTrackTintColor={Colors.border}
                  thumbTintColor={
                    leverageType === "fixed" ? Colors.primary : Colors.border
                  }
                />

                <View style={styles.rangeLabels}>
                  <Text style={styles.badgeText}>1x</Text>
                  <Text style={styles.badgeText}>125x</Text>
                </View>
              </View>
            </View>

            {/* Equity Guardian */}
            <View style={[styles.bentoCard, styles.guardianCard]}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <MaterialIcons
                  name="gpp-maybe"
                  size={18}
                  color={Colors.error}
                />
                <Text style={styles.inputLabel}>Equity Guardian</Text>
              </View>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input, styles.amountInput]}
                  defaultValue="2500"
                  keyboardType="numeric"
                />
                <Text style={styles.currencyLabel}>USDT</Text>
              </View>
              <Text style={{ color: "#8b90a0", fontSize: 11, marginTop: 8 }}>
                Automated stop-loss for total account equity.
              </Text>
            </View>
          </View>
        </View>

        {/* 3. SAVE ACTION */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.saveButton} activeOpacity={0.8}>
            <Text style={styles.saveButtonText}>Save Configuration</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

// Helper Components
const MarginOption = ({ label, isActive, onPress }: any) => (
  <TouchableOpacity
    style={[styles.modeButton, isActive && styles.modeButtonActive]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={[styles.modeText, isActive && styles.modeTextActive]}>
      {label}
    </Text>
    {isActive && <MaterialIcons name="check-circle" size={18} color="#FFF" />}
  </TouchableOpacity>
);
