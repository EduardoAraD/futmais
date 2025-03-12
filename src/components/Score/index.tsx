import { Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

import theme from "../../theme";
import { styles } from "./styles";
import boalAnimation from '../../assets/boal.json'
import club1 from '../../assets/club1.png'

export function Score() {
  return (
    <View style={styles.container}>
      <View style={[styles.triangle, styles.triangleLeft]} />
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.blue]}
        start={[0, 1]}
        end={[1, 1]}
        style={styles.linear}
      >
        <Image source={club1} style={styles.image} />
        <View style={[styles.line, styles.rotateLeft]} />
        <View style={styles.score}>
          <Text style={[styles.textScore, { marginRight: -8 }]}>8</Text>
          <LottieView
            autoPlay={false}
            style={{
              width: 42,
              height: 42,
            }}
            source={boalAnimation}
          />
          <Text style={[styles.textScore, { marginLeft: -8 }]}>8</Text>
        </View>
        <View style={[styles.line, styles.rotateRight]} />
        <Image source={club1} style={styles.image} />
      </LinearGradient>
      <View style={[styles.triangle, styles.triangleRight]} />
    </View>
  )
}