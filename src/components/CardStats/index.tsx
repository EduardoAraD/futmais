import { Text, View } from "react-native";

import { Stats } from "../../model/stats";
import { Loading } from "../Loading";

import { styles } from "./styles";

interface Props extends Stats {
  loading: boolean
}

export function CardStats({
  loading, goal, assistence, mvp, pp
}: Props) {
  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <View style={styles.content}>
            <Text style={styles.title}>{ goal }</Text>
            <Text style={styles.subTitle}>GOLS</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{ assistence }</Text>
            <Text style={styles.subTitle}>ASSIST</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{ mvp }</Text>
            <Text style={styles.subTitle}>MVP</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{ pp }</Text>
            <Text style={styles.subTitle}>PP</Text>
          </View>
        </>
      )}
    </View>
  )
}