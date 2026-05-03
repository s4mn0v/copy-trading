import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { GlobalStyles as Styles } from "../../constants/GlobalStyles";
import { TraderCard } from "../../components/TraderCard";
import { DotBackground } from "@/components/DotBackground";
import { Colors } from "@/constants/Colors";
import Dropdown, { DropdownOption } from "@/components/Dropdown";

const API_URL = "http://localhost:8080/api/v2/traders/list";

const FILTER_OPTIONS: DropdownOption[] = [
  { label: "BEST ROI", value: "ROI" },
  { label: "LOWEST RISK", value: "MDD" },
];

interface MappedTrader {
  id: string;
  roi: string;
  drawdown: string;
  profit: string;
  spots: string;
  type: "LONG" | "SHORT";
}

export default function HomeScreen() {
  const [traders, setTraders] = useState<MappedTrader[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [filter, setFilter] = useState("ROI");

  const fetchTraders = async () => {
    try {
      const response = await fetch(`${API_URL}?pageSize=10&pageNo=1`);
      const json = await response.json();

      if (json.code === "00000") {
        const mappedData = json.data.map((item: any) => {
          const roiData = item.columnList.find(
            (c: any) => c.describe === "ROI",
          );
          const mddData = item.columnList.find(
            (c: any) => c.describe === "MDD",
          );

          return {
            id: item.traderName,
            roi: roiData ? `+${roiData.value}%` : "0%",
            drawdown: mddData ? `-${mddData.value}%` : "0%",
            profit: parseFloat(item.followerTotalProfit).toLocaleString(
              undefined,
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              },
            ),
            spots:
              parseInt(item.followCount) >= parseInt(item.maxLimit)
                ? "Capacity Full"
                : `${item.followCount} / ${item.maxLimit} Spots Available`,
            type: "LONG", // Defaulting to LONG if the API doesn't specify global bias
          };
        });

        setTraders(mappedData);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchTraders();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchTraders();
  };

  return (
    <View style={Styles.container}>
      <DotBackground />
      <View style={Styles.content}>
        <FlatList
          data={traders}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={Colors.primary}
            />
          }
          ListHeaderComponent={() => (
            <View style={{ marginBottom: 24, marginTop: 20 }}>
              <Text style={Styles.label}>Scanner Engine</Text>
              <Text style={Styles.title}>Discover Traders</Text>
              <Dropdown
                options={FILTER_OPTIONS}
                selectedValue={filter}
                onSelect={(val) => setFilter(val)}
                placeholder="SORT BY"
                style={{ marginVertical: 20 }}
              />
            </View>
          )}
          renderItem={({ item }) => <TraderCard {...item} />}
          ListEmptyComponent={() =>
            !loading ? (
              <Text
                style={{ color: "#8b90a0", textAlign: "center", marginTop: 40 }}
              >
                No traders found.
              </Text>
            ) : (
              <ActivityIndicator
                color={Colors.primary}
                size="large"
                style={{ marginTop: 40 }}
              />
            )
          }
        />
      </View>
    </View>
  );
}
