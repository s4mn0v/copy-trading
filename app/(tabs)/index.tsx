import { FlatList, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStyles";
import { TraderCard } from "../../components/TraderCard";
import { DotBackground } from "@/components/DotBackground";

const TRADERS_DATA = [
  {
    id: "TR-882",
    roi: "+85.2%",
    drawdown: "-4.2%",
    isWhale: true,
    type: "LONG" as const,
  },
  {
    id: "TR-991",
    roi: "+112.4%",
    drawdown: "-8.7%",
    isWhale: true,
    type: "LONG" as const,
  },
  {
    id: "TR-105",
    roi: "+64.9%",
    drawdown: "-1.2%",
    isWhale: false,
    type: "SHORT" as const,
  },
];

export default function HomeScreen() {
  return (
    <View style={GlobalStyles.container}>
      <DotBackground />
      <View style={GlobalStyles.content}>
        <FlatList
          data={TRADERS_DATA}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <Text style={GlobalStyles.label}>Scanner Engine</Text>
              <Text style={GlobalStyles.title}>Discover Traders</Text>
            </View>
          )}
          renderItem={({ item }) => <TraderCard {...item} />}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    marginBottom: 24,
  },
});
