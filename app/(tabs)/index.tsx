import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { GlobalStyles as Styles } from "../../constants/GlobalStyles";
import { TraderCard } from "../../components/TraderCard";
import { DotBackground } from "@/components/DotBackground";
import Dropdown, { DropdownOption } from "@/components/Dropdown";

const TRADERS_DATA = [
  {
    id: "TR-882",
    roi: "+85.2%",
    drawdown: "-4.2%",
    profit: "12,450.00",
    spots: "240 / 300 Spots Available",
    type: "LONG" as const,
  },
  {
    id: "TR-991",
    roi: "+112.4%",
    drawdown: "-8.7%",
    profit: "45,820.50",
    spots: "156 / 200 Spots Available",
    type: "LONG" as const,
  },
  {
    id: "TR-105",
    roi: "+64.9%",
    drawdown: "-1.2%",
    profit: "8,120.25",
    spots: "Capacity Full",
    type: "SHORT" as const,
  },
  {
    id: "TR-202",
    roi: "+14.2%",
    drawdown: "-0.8%",
    profit: "2,440.00",
    spots: "45 / 500 Spots Available",
    type: "LONG" as const,
  },
];

const FILTER_OPTIONS: DropdownOption[] = [
  { label: "BEST ROI", value: "roi" },
  { label: "LOWEST RISK", value: "risk" },
];

export default function HomeScreen() {
  const [filter, setFilter] = useState("roi");

  return (
    <View style={Styles.container}>
      <DotBackground />
      <View style={Styles.content}>
        <FlatList
          data={TRADERS_DATA}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View>
              <Text style={Styles.label}>Scanner Engine</Text>
              <Text style={Styles.title}>Discover Traders</Text>

              {/* NATIVE PICKER CONTAINER */}
              <Dropdown
                style={{ marginVertical: 20 }}
                options={FILTER_OPTIONS}
                selectedValue={filter}
                onSelect={(val) => setFilter(val)}
                placeholder="SORT BY"
              />
            </View>
          )}
          renderItem={({ item }) => <TraderCard {...item} />}
        />
      </View>
    </View>
  );
}
