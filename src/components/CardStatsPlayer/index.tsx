import { Text, View } from "react-native";
import { styles } from "./styles";

export function CardStatsPlayer() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>90</Text>
        <Text style={styles.subTitle}>GOLS</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>14</Text>
        <Text style={styles.subTitle}>ASSIST</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>2</Text>
        <Text style={styles.subTitle}>MVP</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>0</Text>
        <Text style={styles.subTitle}>PP</Text>
      </View>
    </View>
  )
}