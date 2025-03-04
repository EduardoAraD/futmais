import { View } from "react-native";

import { LineStats } from "../../../components/LineStats";

import { styles } from "./styles";

export function EditStats() {
  return (
    <View style={styles.container}>
      <LineStats name="GOLS" value="23" />
      <LineStats name="Assistências" value="1" />
      <LineStats name="Melhor do Racha (MVP)" value="2" />
      <LineStats name="Perna de Pau (PP)" value="0" />
      <LineStats name="Rachas presentes" value="2" />
      <LineStats name="Nota Média" value="2" star={2} />
    </View>
  )
}